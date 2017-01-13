import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    questionFormShow() {
      this.set('addNewRental', true);
    }
  }
});
