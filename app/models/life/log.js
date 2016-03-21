// app/models/life/log.js

import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

    log: DS.attr('string'),
    created_on: DS.attr('date', { defaultValue: new Date() }),

    isValid: Ember.computed.gte('log.length', 5),
});
