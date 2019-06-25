import Cookies from 'js-cookies'

export const getAccessToken = () => Cookies.getItem('jwt')
export const getRefreshToken = () => Cookies.getItem('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const authenticate = async () => {
  if (getRefreshToken()) {
    try {
      const tokens = await refreshTokens() // call an API, returns tokens

      const expires = (tokens.expires_in || 60 * 60) * 1000
      const inOneHour = new Date(new Date().getTime() + expires)

      // you will have the exact same setters in your Login page/app too
      Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
      Cookies.set('refresh_token', tokens.refresh_token)

      return true
    } catch (error) {
      history.push('/')
      return false
    }
  }

  history.push('/')
  return false
}
//
// <Route exact path="/admin" render={props =>
//   <Admin {...props}  scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>}
//   />
