import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this Comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
