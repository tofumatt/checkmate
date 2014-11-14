import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  checkins: DS.hasMany('checkin'),
  name: attr('string')
});
