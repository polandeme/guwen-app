// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('myCtrl', function($scope, $http, $q, $timeout) {
  var HOST = 'http://guwen.stuzone.com/index.php/';
  $scope.noMoreItemsAvailable = false;
  $scope.pageNum = 1;
  $scope.qdata = [];

  $scope.get = function () {
    var deferred = $q.defer();
    $http.get(HOST　+'api/index/index/' + $scope.pageNum)
    .success(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  $scope.get().then(function(data) {
    for(var i = 0; i < data.length; i++) {
        $scope.qdata.push(data[i]);
      }

  });

$scope.loadMore = function() {
      $scope.pageNum ++;
      $scope.get().then(function(data) {
      for(var i = 0; i < data.length; i++) {
          $scope.qdata.push(data[i]);
        }
      });
    };


  


})
