app.component("taskList", {
    bindings:{
      tasks:'<'
    },
    templateUrl: "components/taskList/taskList.html",
    controller: function(){
      this.selectTask = function(){
        alert('yuh')
      }
    }
});
