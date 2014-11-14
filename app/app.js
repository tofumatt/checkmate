import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver
});

// App.ApplicationSerializer = DS.IndexedDBSerializer.extend();
// App.ApplicationAdapter = DS.IndexedDBAdapter.extend({
//   databaseName: 'checkmate',
//   version: 1,
//   migrations: function() {
//     this.addModel('user');
//   }
// });

loadInitializers(App, config.modulePrefix);

export default App;
