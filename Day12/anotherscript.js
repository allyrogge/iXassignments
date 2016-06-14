var app = angular.module("Phonebook", []); // Do not forget the empty array.

app.controller("MainCtrl", function($scope) {
  $scope.name = "";
  $scope.phone="";
  $scope.items = [];

  $scope.addItem = function() {
  	$scope.contacts=[];
    $scope.contacts.push($scope.name);
    $scope.contacts.push($scope.phone);
    // console.log($scope.items.join(" "));
    $scope.items = "";
    $scope.oneline=$scope.contacts.join(" ");
	console.log ($scope.contacts.join(" "));
	$scope.items.push($scope.oneline);
}
	console.log($scope[1])
  });


//var app = angular.module("Phonebook", []); // Do not forget the empty array.

// app.controller("MainCtrl", function($scope) {
//   $scope.newPerson = "";
//   $scope.newPeople = [];

//   $scope.addItem = function() {
//     $scope.newPeople.push($scope.newPerson);
//     console.log($scope.newPeople);
//     $scope.newPerson = "";
//   }
// });