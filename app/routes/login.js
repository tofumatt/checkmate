import Ember from 'ember';
import foursquare from '../utils/foursquare';

export default Ember.Route.extend({
  setupController: function(controller) {
    var accessToken = null;

    if (window.location.hash.match(/access_token=(.*)/)) {
      accessToken = window.location.hash.match(/access_token=(.*)/)[1];
      foursquare.loginWithAccessToken(accessToken);
    }

    controller.set('accessToken', accessToken);
  }
});
