import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
