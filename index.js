/**
 * Created by tinhonng on 5/25/15.
 */
var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('formController', function($scope){
   $scope.reRoute = function(){
       console.log('reRouted');
   }
});

