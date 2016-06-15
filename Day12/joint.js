var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/submissionform.html"
  })
  $routeProvider.when("/search", {
    templateUrl: "templates/phonebook.html"
  })
});

app.controller("FormCtrl", function($scope, $location) {

        
    $scope.phone = "";
    $scope.email = "";
    $scope.password= "";

    var checkPhone = function() {
        if($scope.phone[3] != "-" || $scope.phone[7]!= "-") {
            return false
        } 
        return true
    }
    var checkEmail = function () {
        if ($scope.email.length != 11) {
            
            return false
        }
        if ($scope.email[3]!= "@" ) {
            console.log("second");
            return false
        }
        if ($scope.email[7] != "." ) {
            console.log("third");
            return false
        }
        return true  
    }
    var checkPassword = function() {
        if($scope.password.length < 6) {
            return false
        } 
        return true
    }
    var checkBoth = function() {
        if ($scope.password != $scope.reenterpassword){
            return false
        }
        return true
    }
    $scope.checkInputs= function(){
        $scope.error= "";
        var isFormValid=true;
        if (!checkPhone()) {
            $scope.error+=("You've entered an invalid phone number")
            isFormValid=false;
        }
        if (!checkEmail()) {
            $scope.error+=("You've entered an invalid email address")
            isFormValid=false;
        }
        if (!checkPassword()) {
            $scope.error+=("You've entered a password under 6 characters")
            isFormValid=false;
        }
        if (!checkBoth()){
            $scope.error+=("Make sure your passwords match")
            isFormValid=false;
        }
        console.log("this is correct")
            $scope.phone = "";
            $scope.email = "";
            $scope.password= "";
            // $scope.error= " ";
            $scope.reenterpassword= "";
            
            if (isFormValid) {
                $location.path("/search");
            }
    
}
});


app.controller("MainCtrl", function($scope) {
  // $scope.items = $scope.name + $scope.phone;
  $scope.name = "";
  $scope.phone="";
  $scope.items=[];
  $scope.error="";

        	$scope.addItem = function() {
        		$scope.contacts=[];
        		$scope.contacts.push($scope.name);
        		$scope.contacts.push($scope.phone);

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


