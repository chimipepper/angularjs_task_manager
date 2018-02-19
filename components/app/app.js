app.component("app", {
    bindings:{},
    templateUrl: "components/app/app.html",
    controller: function() {
        var $ctrl = this;

        $ctrl.addTask = function() {
            var newTask = $ctrl.otherTasks[Math.floor(Math.random()*$ctrl.otherTasks.length)];
              $ctrl.tasks.push(newTask);
        };

        $ctrl.tasks = [
            {
                id: 1,
                title: "Buy a camping tent",
                profilePic: "css/pics/nade.jpg",
                date: "22 Feb, 2018"
            },

            {
                id: 2,
                title: "Save Sanji",
                profilePic: "css/pics/nami.jpg",
                date: "22 Feb, 2018"
            },
            {
                id: 3,
                title: "Find One Piece",
                profilePic: "css/pics/luffy.png",
                date: "22 Feb, 2018"
            },
            {
                id: 4,
                title: "Fight Jiren",
                profilePic: "css/pics/goku.jpg",
                date: "22 Feb, 2018"
            }
        ];

        $ctrl.otherTasks =[
          {
              title: "Find Big Mom's Treasure",
              profilePic: "css/pics/nami.jpg",
              date: "22 Feb, 2018"
          },

          {
              title: "Collect the Dragon Balls",
              profilePic: "css/pics/goku.jpg",
              date: "22 Feb, 2018"
          },
          {
              title: "Become King of the Pirates",
              profilePic: "css/pics/luffy.png",
              date: "22 Feb, 2018"
          },
          {
              title: "Win the school talent show",
              profilePic: "css/pics/lovelive.jpg",
              date: "22 Feb, 2018"
          }
        ]


    }
});
