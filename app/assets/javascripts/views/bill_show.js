window.BillSplit.Views.BillShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },
  template: JST['bills/show'],
  render: function () {
    var content = this.template({
      bill: this.model
    });

    this.$el.html(content);
    return this;
  }
})