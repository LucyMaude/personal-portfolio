var app = angular.module("lucyApp");

app.controller("homeCtrl", ["$scope", "$location", function($scope, $location){
    $scope.pageClass = "page-home";
    $scope.currentPath = $location.path();
    console.log($scope.currentPath);
    
    $scope.scrollFunction = function () {
        window.scrollTo(0,document.body.scrollHeight);
    } 

}])


