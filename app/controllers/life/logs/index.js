import Ember from 'ember';

export default Ember.Controller.extend({

    sortProperties: ['created_on:desc'],

    sortedModel: Ember.computed.sort('model', 'sortProperties')
});
