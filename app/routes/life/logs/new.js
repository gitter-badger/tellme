import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('life/log');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
    },

    renderTemplate: function() {
        this.render('life.logs.form');
    },

    actions: {

        saveLog(newLog) {
            newLog.save().then(() => this.transitionTo('life/logs'));
        },

        willTransition() {
            let model = this.controller.get('model');

            if (model.get('isNew')) {
                model.destroyRecord();
            }
        }
    }
});
