import Ember from 'ember';
import foursquare from '../utils/foursquare';

export default Ember.Route.extend({
  setupController: function(controller) {
    var accessToken = null;
    var self = this;

    if (window.location.hash.match(/access_token=(.*)/)) {
      accessToken = window.location.hash.match(/access_token=(.*)/)[1];

      foursquare.loginWithAccessToken(accessToken).then(function(data) {
        var user = self.store.createRecord('user', {
          foursquareID: data.response.user.id,
          firstName: data.response.user.firstName,
          lastName: data.response.user.lastName,
          accessToken: accessToken,
          bio: data.response.user.bio,
        });

        user.save().then(function() {
          self.transitionTo('timeline');
        }).catch(function(err) {
          console.log(err);
        });
      });
    }

    controller.set('accessToken', accessToken);
  }
});
