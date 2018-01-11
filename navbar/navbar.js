var app = angular.module("lucyApp");

app.directive("navbar", [ function() {  
    return {
        templateUrl: "navbar/navbar.html",
        restrict: "E"
    };
}]);