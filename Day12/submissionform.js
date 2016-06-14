
var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope){
    $scope.phone = " ";
    $scope.email = " ";
    $scope.password= " ";

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
        if ($scope.email[4]!= "@") {
            return false
        }
        if ($scope.email[7] != ".") {
            return false
        }
        return true  
    }
    var checkPassword = function() {
        if($scope.password.length <= 6) {
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
        $scope.error= " ";
        if (!checkPhone()) {
            $scope.error+=("You've entered an invalid phone number")
        }
        if (!checkEmail()) {
            $scope.error+=("You've entered an invalid email address")
        }
        if (!checkPassword()) {
            $scope.error+=("You've entered a password under 6 characters")
        }
        if (!checkBoth()){
            $scope.error+=("Make sure your passwords match")
        }
        console.log("this is correct")
            $scope.phone = " ";
            $scope.email = " ";
            $scope.password= " ";
            // $scope.error= " ";
            $scope.reenterpassword= " ";
    
}

});

