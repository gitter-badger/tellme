import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.findAll('life/log');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
    },

    renderTemplate: function() {
        this.render('life.logs.index');
    },

    actions: {

    }
});
