module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "css/stylintrucks.com/main.css",
    "assets/*.svg",
    "assets/*.png",
    "images/*.jpg",
    "images/icons/*.jpg",
    "js/polyfill.js",
    "bundle.js"
  ],
  "swSrc": "src/sw-base.js",
  "swDest": "public/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};
