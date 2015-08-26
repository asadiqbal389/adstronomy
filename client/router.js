Router.configure({
	layoutTemplate: 'homemain'
});

Router.route('/', function () {
	this.render('catCards',{
		waitOn : function() { return Meteor.subscribe("vids");},
		data : function() { return Youtubeurls.find();}
	});

});
Router.route('/recently-added', function () {
  this.render('cardcatsingle');
});