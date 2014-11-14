import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('checkin');
  // },

  setupController: function(controller) {
    if (!localStorage["accessToken"]) {
      controller.set('currentUser', null);
    } else {
      this.store.find('user', {
        accessToken: localStorage["accessToken"]
      }).then(function(user) {
        controller.set('currentUser', user);
      }).catch(function(err) {
        console.error(err);
      });
    }
  }
});
