
var app = angular.module("Contacts", []); // Do not forget the empty array.

app.controller("MainCtrl", function($scope) {
 $scope.newContact = $scope.name + $scope.number;
 $scope.Validations = "";
 $scope.items = [];

 $scope.addContact = function() {
   // $scope.name = "";
   $scope.newContact = $scope.name + $scope.number;
   $scope.items.push($scope.newContact);
   // console.log($scope.contact);
   $scope.newContact = "";
 }


 if (!$scope.name || $scope.name === "") {
           $scope.Validations.name = "Invalid Name ";
           $scope.submitForm = false;
       }

$scope.isValidPhone = function (number) {
   if (number) {
   $scope.phoneTest = number.split("-");
       if ($scope.phoneTest.length !== 3){
           return false;
       }
       else if(($scope.phoneTest[0].length !==3) || ($scope.phoneTest[0] == NaN)) {
           return false;
       }
       else if(($scope.phoneTest[1].length !==3) || ($scope.phoneTest[1] == NaN)) {
           return false;
       }
       else if(($scope.phoneTest[2].length !==4) || ($scope.phoneTest[2] == NaN)) {
           return false;
       }
       else {
           return true;
       }
   }               
}

if ($scope.number === false || !$scope.isValidPhone($scope.number)) {
           $scope.Validations.number = "Invalid Phone Number ";
           $scope.submitForm = false;
           console.log($scope.name);
           console.log($scope.number);
       }  

});