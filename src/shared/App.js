import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'

class App extends Component {
  render() {
    const that = this;
    return (
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route key={path} path={path} exact={exact} render={(props) => (
            <Component {...that.props} path={path} {...props} {...rest} />
          )} />
        ))}
        <Route render={(props) => <NoMatch {...props} />} />
      </Switch>
    )
  }
}

export default App
