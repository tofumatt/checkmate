import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  shout: attr('string'),
  user: DS.belongsTo('user'),
  venue: DS.belongsTo('venue')
});
