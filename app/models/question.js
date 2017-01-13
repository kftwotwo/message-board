import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  description: DS.attr(),
  notes: DS.attr()
});
