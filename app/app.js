import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

Ember.MODEL_FACTORY_INJECTIONS = true;

// localStorage.clear();
var App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver,

    ApplicationSerializer: DS.LSSerializer.extend(),
    ApplicationAdapter: DS.LSAdapter.extend({
        namespace: 'checkmate'
    })
});

loadInitializers(App, config.modulePrefix);

export default App;
