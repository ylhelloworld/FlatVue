
var app = new Vue({
  el: '#app',
  data: {
    title: 'Sample Data',
    table: []
  },
  methods: {
    row_click: function (event) {
      var test = event;
      //debugger;
      console.info(event);
      console.info(event.target);
      console.info(this.table);
    },
    load_jquery_data: function () {
      var _self = this;
      console.info('load.....');
      $.get("data/orders.json", result => {
        console.info(result);
        _self.table = eval(result);
      })
    },
    load_axios_data: function () {
      var _self=this;
      axios.post("data/orders.json").then(function (response) { 
        _self.table=eval(response.data)
      }).catch(function(error){
        console.error(error);
      })
    },
    load_resource_vue_data: function () {
      this.$http.post("data/orders.json").then(function (data) {  
        this.table = eval(data.body);  
      }).catch(function(error){
        console.error(error); 
      }) 
    }
  }
});
app.load_resource_vue_data();