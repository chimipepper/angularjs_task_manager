app.component("addTask", {
    require: {
        parentCtrl: "^myCtrl"
    },
    templateUrl: "components/taskList/addTask/addTask.html"
});
