window.BillSplit.Views.NewPayment = Backbone.View.extend({
  initialize: function (options) {
    this.users = options.users;
    this.listenTo(this.users, 'sync', this.render)
  },
  template: JST['payments/new'],
  events: {
    'submit #new-payment' : 'submitPayment'
  },
  render: function () {
    var content = this.template({
      users: this.users
    });
    this.$el.html(content);
    return this;
  },
  submitPayment: function (event) {
    event.preventDefault();
    var paymentAttrs = $(event.target).serializeJSON()['payment'];
    this.collection.create(paymentAttrs);
  }
})