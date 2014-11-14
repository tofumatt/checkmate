import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    foursquareID: attr('number'),
    // photo: ['object']
    // relationship:
    //     allowNull: true
    //     default: CONSTANTS.RELATIONSHIP.NONE
    //     type: "string"
    // type:
    //     allowNull: true
    //     default: CONSTANTS.TYPE.USER
    //     type: "string"
    // friends: null
    homeCity: attr('string'),
    gender: attr('string'),
    // contact: null
    bio: attr('string'),
    // tips: null
    // checkins: ['object']
    // currentLocation: ['object']

    checkins: DS.hasMany('checkin'),
    accessToken: attr('string'),

    lastUpdated: attr('date')
});

export default User;
