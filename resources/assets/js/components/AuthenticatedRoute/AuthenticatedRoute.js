import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AuthenticatedRoute = ({
  component: Component,
  exact,
  path,
}) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <img/>
      )
    }
  />
)

class AuthenticateBeforeRender extends Component {
  state = {
    isAuthenticated: false,
  }

  componentDidMount() {
    authenticate().then(isAuthenticated => {
      this.setState({ isAuthenticated })
    })
  }

  render() {
    return this.state.isAuthenticated ? this.props.render() : null
  }
}

import cookies from 'js-cookies'

export const getAccessToken = () => cookies.getItem('jwt')
export const getRefreshToken = () => cookies.getItem('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const authenticate = async () => {
  if (getRefreshToken()) {
    try {
      const tokens = await refreshTokens() // call an API, returns tokens

      const expires = (tokens.expires_in || 60 * 60) * 1000
      const inOneHour = new Date(new Date().getTime() + expires)

      // you will have the exact same setters in your Login page/app too
      cookies.setItem('access_token', tokens.access_token, { expires: inOneHour })
      cookies.setItem('refresh_token', tokens.refresh_token)

      return true
    } catch (error) {
      history.push('/')
      return false
    }
  }

  history.push('/')
  return false
}

export default AuthenticatedRoute;
