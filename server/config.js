Accounts.loginServiceConfiguration.remove({
		service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
		service: "facebook",
		appId: Meteor.settings.facebookAppId,
		secret: Meteor.settings.facebookSecret
});
