var app = angular.module("lucyApp");

app.directive("contact", [function() { 
    return {
        templateUrl: "contact/contact.html",
        restrict: "E",
        controller: "homeCtrl"
    };
}]);