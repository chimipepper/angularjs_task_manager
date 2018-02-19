app.component("taskDetails", {
  bindings:{
    selected:'<'
  },
    templateUrl: "components/taskDetails/taskDetails.html",
    controller: function(){
      this.selectTask = function(){
        alert('yuh')
      }
    }
});
