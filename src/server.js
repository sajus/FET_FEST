import express from "express"
import fs from 'fs'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compression from 'compression';
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import helmet from 'helmet'
import App from './shared/App'
import routes from './shared/routes'
import { getSiteContents } from './api/getContents.js'
import { default as minifyCssString } from 'minify-css-string'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())
app.use(compression())
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
app.get("*", (req, res, next) => {
  if (req.path.split('.').length === 1) {
    getSiteContents(req).then(apiData => {
      const domainName = (req.hostname == 'localhost') ? 'localhost' : req.hostname;
      const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
      const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req, domainName)
        : Promise.resolve()
      // const isAmp = req.originalUrl.indexOf('amp') > 0 ? true : false;
      promise.then((data) => {
        const context = { data }
        const markup = renderToString(
          <StaticRouter location={req.url} context={context}>
            <App apiData={apiData} isBrowser={false} />
          </StaticRouter>
        )

        // let css = fs.readFileSync(`public/css/${'localhost'}/main.css`, 'utf8');
        // css = minifyCssString(css);
        // PUT in html head "<style type="text/css">${css}</style>"
        res.send(`
          <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no">
			      <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
            <!--<noscript><div id="noscript"><div class="nos-header" href="/"><a href="/" class="nos-logo"><img class="nos-logo-img" src="/assets/images/PT_Logo.png" width="70px"></a></div><div class="nos-page-layout nos-error-page"><div class="nos-content"><div class="nos-image" width="100"><svg width="77" height="36" viewBox="0 0 77 36" xmlns="http://www.w3.org/2000/svg"><g stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M61.647 5.91c-.85-1.313-2.088-2.47-3.48-3.32-.93-.54-1.857-1.002-2.94-1.234-4.022-1.003-8.045.154-10.83 2.932L32.642 15.863c-4.408 4.398-4.408 11.497 0 15.82C34.73 33.763 37.59 35 40.61 35c3.017 0 5.8-1.157 7.967-3.318l7.04-7.022M27 12l-16.6 1.536c-5.928.7-10.102 6.042-9.3 11.905.357 2.807 1.8 5.43 4.087 7.218s5.078 2.565 7.99 2.22L26 34"/><path d="M41.675 13.01c.685.372 1.324.815 1.907 1.318 2.22 1.916 3.62 4.71 3.632 7.84a10.796 10.796 0 0 1-3.11 7.715c-.55.56-1.15 1.052-1.788 1.475M63.91 15.72l11.546 2.667m-10.273-6.56l8.78-1.348m-10.687 9.714l7.21 5.188"/></g></svg></div><div class="nos-title">Please enable Javascript in your browser.</div><div class="nos-subtitle">Go to Settings -> Site Settings -> Javascript -> Enable</div></div></div></div></noscript>-->
            <script id="ssr-data">window.__SLOT_DATA__ = ${serialize(data)}</script>
            <script id="ssr-data">window.__INITIAL_DATA__ = ${serialize(apiData)}</script>
            ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
          </head>
          <body class="font-body">
            <div id="app">${markup}</div></body>
            <script>
              if ('serviceWorker' in window.navigator) {
                window.addEventListener('load', function() {
                  window.navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log("Service Worker registered!");
                    })
                    .catch(function(err) {
                      console.log("Service Worker registration failed");
                    });
                });
              }
            </script>
        </html>
        `)
      }).catch(next)
    });
  } else next()
})

export default app;
