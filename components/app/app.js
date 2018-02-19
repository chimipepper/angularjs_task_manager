app.component("app", {
    bindings: {},
    templateUrl: "components/app/app.html",
    controller: function() {
        var $ctrl = this;

        $ctrl.addTask = function() {
            var newTask = $ctrl.otherTasks[Math.floor(Math.random() * $ctrl.otherTasks.length)];
            $ctrl.tasks.push(newTask);
        };

        $ctrl.tasks = [{
                title: "Buy a camping tent",
                profilePic: "css/pics/nade.jpg",
                date: "22 Feb, 2018",
                description:"God’s Plan is a feel good track that discusses Drake’s future. Being who he is in the industry he knows that people want him to fail, however God won’t let him do that. Another key subject of the song is the separation Drake feels that heneeds to have from those outside of his inner circle. Anyone who tries to work their way into his life must have an ulterior motive to benefit themselves. The song was originally leaked on Instagram under the title “God’s Plan.” Later,it was thought to..."
            },

            {
                title: "Save Sanji",
                profilePic: "css/pics/nami.jpg",
                date: "22 Feb, 2018",
                description:"Vinsmoke Sanji, most commonly known by his moniker 'Black Leg' Sanji, is a pirate and the cook of the Straw Hat Pirates, as well as the former sous chef of the Baratie. He is also the third son of the Vinsmoke Family,[17] thus making him a prince of the Germa Kingdom, until he officially denounced them once again."
            },
            {

                title: "Find One Piece",
                profilePic: "css/pics/luffy.png",
                date: "22 Feb, 2018",
                description:"He believes that being Pirate King means having the most freedom in the world.He has eaten the Gomu Gomu no Mi, which gives the consumer's body the properties of rubber.As the founder and captain of the Straw Hat Pirates, he is the first member of the crew, as well as one of its top three fighters."
            },
            {

                title: "Fight Jiren",
                profilePic: "css/pics/goku.jpg",
                date: "22 Feb, 2018",
                description:"Jiren is a being who devotes everything to justice and never acts for selfish reasons, he lives to protect Universe 11, even stating that he would leave the tournament while it was happening in order to return there if any problem arose in the 48 minutes of the tournament. He will never kill any villains he defeats and instead captures them."
            }
        ];

        $ctrl.otherTasks = [{
                title: "Find Big Mom's Treasure",
                profilePic: "css/pics/nami.jpg",
                date: "22 Feb, 2018",
                description:"Charlotte Linlin, better known as Big Mom, is famous for holding her tea parties. The candy tribute produced by every one of her protectorate islands would be collected monthly for the tea party; failure to provide would result in said island to be destroyed by the Big Mom Pirates, with neither grace period nor excuses would be permitted."
            },

            {
                title: "Collect the Dragon Balls",
                profilePic: "css/pics/goku.jpg",
                date: "22 Feb, 2018",
                description:"Dragon Ball Z (Japanese: ドラゴンボールZ ゼット Hepburn: Doragon Bōru Zetto, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation. Dragon Ball Z is the sequel to the Dragon Ball anime and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama, that were published from 1988 to 1995 in Weekly Shōnen Jump. Dragon Ball Z first aired in Japan on Fuji TV from April 26, 1989 to January 31, 1996, before being dubbed in several territories around the world, including the United States, Canada, Australia, Europe, India, and Latin America"
            },
            {
                title: "Become King of the Pirates",
                profilePic: "css/pics/luffy.png",
                date: "22 Feb, 2018",
                description:"One Piece (Japanese: ワンピース Hepburn: Wan Pīsu) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997, and has been collected in 87 tankōbon volumes. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as 'One Piece' in order to become the next Pirate King."
            },
            {
                title: "Win the school talent show",
                profilePic: "css/pics/lovelive.jpg",
                date: "22 Feb, 2018",
                description:"Honoka Kōsaka is a girl who attends Otonokizaka Academy. When the school is scheduled to be closed due to a lack of applicants, Honoka becomes determined to save it. Honoka goes to UTX, where her little sister planned to go for high school, and sees a crowd watching a music video of A-Rise, UTX's school idol group. Learning that school idols are popular, Honoka and her friends follow A-Rise's footsteps and start their own school idol group called μ's (ミューズ Myūzu, pronounced 'muse') to attract new students."
            }
        ]

        $ctrl.selectedTask = {

            title: "Find One Piece",
            profilePic: "css/pics/luffy.png",
            date: "22 Feb, 2018",
            description:"He believes that being Pirate King means having the most freedom in the world.He has eaten the Gomu Gomu no Mi, which gives the consumer's body the properties of rubber.As the founder and captain of the Straw Hat Pirates, he is the first member of the crew, as well as one of its top three fighters."
        }

        $ctrl.selectTask = function(index) {
            console.log(index)
            $ctrl.selectedTask = $ctrl.tasks[index]
        }


    }
});
