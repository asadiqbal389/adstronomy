if (Meteor.isClient) {
	Template.loginbtnSoc.events({
		"click .btn-facebook": function() {
	      Meteor.loginWithFacebook({
	         requestPermissions: ['email']
	         }, function(err){
	             if (!err) 
	              console.log("Facebook login successful")
	          }
	      )
	    },
	   "click .btn-google": function() {
	       Meteor.loginWithGoogle({
	         requestPermissions: ['email']
	         }, function(err){
	             if (!err)
	              console.log("Google login successful")
	          }
	       )
	   }
	});
	Template.userInfo.helpers({
	  profileUrl: function () {
	  	var userScosial = Object.keys(Meteor.user().services)[0];
	  	if (userScosial  === "google")
		    return {src: Meteor.user().services.google.picture}
		  else if (userScosial === "facebook")
		  	return {src: 'https://graph.facebook.com/v2.4/'+Meteor.user().services.facebook.id+'/picture'}
	  }
	});
	Template.userInfo.events({
	 	"click .logout": function(){
		   		Meteor.logout();
		   }
	});
}	