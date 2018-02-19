app.component("taskList", {
    bindings: {
        tasks: '<',
        select: '&'
    },
    templateUrl: "components/taskList/taskList.html",
    controller: function() {
        this.selectTask = function(index) {
            console.log(index)
            this.select({
                index: index
            });
        }
    }
});
