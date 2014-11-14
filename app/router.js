import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/*wildcard' });

  this.resource('user', { path: 'users/:user_id' }, function() { });
  this.route('login');
  this.route('timeline', { path: '/' });
  this.resource('checkin', { path: 'checkins/:checkin_id' }, function() { });
  this.resource('venue', { path: 'venues/:venue_id' }, function() { });
});

export default Router;
