window.BillSplit.Views.NewBillShare = Backbone.View.extend({
  events: {
    'submit form#new-share-form' : 'handleNewShare'
  },
  handleNewShare: function (event) {
    event.preventDefault();
    var billShareAttrs = $(event.target).serializeJSON()
    debugger;
  },
  initialize: function (options) {
    this.bill = options.bill;
    this.users = options.users;
    this.listenTo(this.users, 'sync', this.render);
  },
  render: function () {
    var content = this.template({
      users: this.users
    });
    this.$el.html(content);
    return this;
  },
  template: JST['bill_shares/new']
})