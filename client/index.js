Template.user_loggedout.events({
	"click #login": function(e, tmpl){
		Meteor.loginWithFacebook({
				requestPermissions: ['publish_actions']
		}, function (err) {
			if(err) {
				//error handling
				//alert(err);
			} else {
				//show an alert
				//alert('logged in');
			}
		});
	}
});

Template.user_loggedin.events({
	"click #logout": function(e, tmpl) {
		Meteor.logout(function(err) {
			if(err) {
				//show err message
			} else {
				//show alert that says logged out
				//alert('logged out');
			}
		});
	}
});