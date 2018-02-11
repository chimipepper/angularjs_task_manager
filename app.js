var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.selected = null;

    $scope.tasks = [
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
        },
        {
            title: "Buy a camping tent",
            profilePic: "css/pics/nade.jpg",
            date: "22 Feb, 2018"
        },

        {
            title: "Save Sanji",
            profilePic: "css/pics/nami.jpg",
            date: "22 Feb, 2018"
        },
        {
            title: "Find One Piece",
            profilePic: "css/pics/luffy.png",
            date: "22 Feb, 2018"
        },
        {
            title: "Fight Jiren",
            profilePic: "css/pics/goku.jpg",
            date: "22 Feb, 2018"
        }
    ];
    $scope.lastName = "Doe";
});
