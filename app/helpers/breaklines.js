import Ember from 'ember';

export function breaklines(text) {

    // Converts '\n' chars in text to '<br>'
    return (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
}

export default Ember.Helper.helper(breaklines);
