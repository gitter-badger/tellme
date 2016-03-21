import Ember from 'ember';

export function isPrivate(v1) {

    return (v1 == 'private');
}

export default Ember.Helper.helper(isPrivate);
