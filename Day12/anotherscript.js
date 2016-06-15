var app = angular.module("Phonebook", []); // Do not forget the empty array.

app.controller("MainCtrl", function($scope) {
  // $scope.items = $scope.name + $scope.phone;
  $scope.name = "";
  $scope.phone="";
  $scope.items=[];
  $scope.error="";
  // $scope.addItem();
        	// console.log("correct");
        	// $scope.addItem()
        	$scope.addItem = function() {
        		$scope.contacts=[];
        		$scope.contacts.push($scope.name);
        		$scope.contacts.push($scope.phone);
    // console.log($scope.items.join(" "));
    // $scope.items = "";
    $scope.oneline=$scope.contacts.join(" ");
    console.log ($scope.contacts.join(" "));
    $scope.items.push($scope.oneline);
    console.log($scope.items);
    console.log($scope.items[0]);}
    $scope.submit= function (addItem){

    	var checkPhone = function() {

    		if ($scope.phone.length > 12) {
    			console.log("a");
    			return false
    			
    		}
    		if($scope.phone[3] != "-" || $scope.phone[7]!= "-") {
    			console.log("b");
    			return false
    			
    		}

    		return true
    	}
        // $scope.error= " ";
        if (!checkPhone()) {
        	$scope.error+=("You've entered an invalid phone number")
        }
        else {
        $scope.addItem();
        	// console.log("correct");
        	// $scope.addItem()
        	$scope.addItem = function() {
        		$scope.contacts=[];
        		$scope.contacts.push($scope.name);
        		$scope.contacts.push($scope.phone);
    // console.log($scope.items.join(" "));
    // $scope.items = "";
    $scope.oneline=$scope.contacts.join(" ");
    console.log ($scope.contacts.join(" "));
    $scope.items.push($scope.oneline);
    console.log($scope.items);
    console.log($scope.items[0]);}
}

}
});
	// console.log("this is correct")
 //            $scope.phone = " ";
 //            $scope.name=" ";
 //            // $scope.error= " ";




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