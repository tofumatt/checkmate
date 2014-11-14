import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/*wildcard' });

  this.resource('user', { path: 'users/:user_id' }, function() { });
  this.route('login');
  this.route('timeline');
});

export default Router;
