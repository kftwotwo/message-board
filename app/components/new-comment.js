import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       question: this.get('question')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
