`import Ember from 'ember'`
`import config from '../config/environment'`

LoginController = Ember.Controller.extend({
  accessToken: null
  loginURL: "https://foursquare.com/oauth2/authenticate?client_id=#{config.APP.FOURSQUARE_CLIENT_ID}&response_type=token&redirect_uri=#{window.location.protocol}//#{window.location.host}#{window.location.pathname}"
})

`export default LoginController`
