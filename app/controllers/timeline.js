import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentUser: undefined,

  currentUserChanges: function(currentUser) {
    console.warn(currentUser, this.get('currentUser'));
    if (!this.currentUser) {
      this.transitionToRoute('login');
    }

    console.warn(this.get('currentUser'));
  }.observes('currentUser')
});
