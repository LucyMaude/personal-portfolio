var app = angular.module("lucyApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            controller: "homeCtrl",
            templateUrl: "home/home.html"
        })
        .when("/contact", {
            controller: "contactCtrl",
            templateUrl: "contact/contact.html"
        })
        .when("/projects", {
            controller: "projectCtrl",
            templateUrl: "projects/projects.html"
        })
        .when("/skills", {
            controller: "skillsCtrl",
            templateUrl: "skills/skills.html"
        })
        .when("/about", {
            controller: "aboutCtrl",
            templateUrl: "about/about.html"
        })
    .when("/haiku", {
            controller: "haikuCtrl",
            templateUrl: "exploreHaiku/haiku.html"
        })
    .when("/run", {
            controller: "runCtrl",
            templateUrl: "runability/runability.html"
        })
    .when("/rock", {
            controller: "rockCtrl",
            templateUrl: "rockVote/rockVote.html"
        })
    .when("/api", {
            controller: "apiCtrl",
            templateUrl: "apiThrones/api.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);


