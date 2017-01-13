import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Bob Joe",
  question: "How do you work a computer?",
  notes: "Computers are sutpid"
}, {
  id: 1,
  author: "James Nick",
  question: "What is JavaScript?",
  notes: "JavaScript?"
}, {
  id: 1,
  author: "Cooper Crabtree",
  question: "Is a computer nerd cool?",
  notes: "Nerds?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
