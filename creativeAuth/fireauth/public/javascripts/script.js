var myApp = angular.module("myApp",["firebase"]);
myApp.controller("chatController", ["$scope", "$firebaseArray",
 function($scope, $firebaseArray) {
   var ref = firebase.database().ref().child("messages");
   $scope.chats = $firebaseArray(ref);

   $scope.update = function(user) {
	console.log(username);
	user.name = username;
	console.log(user.name);
	var newmessage = {from:user.name || "anonymous",body:user.chat};
	console.log(newmessage);
        $scope.chats.$add(newmessage);
        user.chat = "";
   }

   $scope.signup = function(user) {
	username = user.name;
	console.log(username);
	$scope.username = user.name;
	$scope.signedIn = "true";
	//$scope.signedIn = "false";
	firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
	   /* .then(function(authData) {
		$scope.signedIn = "true"
	    })*/	
	    .catch(function(error) {
  		// Handle Errors here.
		//$scope.signedIn = "false";
  		var errorCode = error.code;
 		var errorMessage = error.message;
  		console.log(errorMessage);
		//alert(errorMessage);
	});
   }
  }
]);

