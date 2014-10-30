import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
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

    access_token: attr('string'),

    lastUpdated: attr('date')
});

export default User;
