//Youtubeurls = new Mongo.Collection('videourls');

Meteor.publish("users", function(){
  return Meteor.users.find();
});
Meteor.methods({
		uploadVdoId: function(video_id, vdoDes, vdoCat) {
			Youtubeurls.insert({
				videoid: video_id,
				des: vdoDes,
				category: vdoCat,
				upldat: new Date()
			});
		}
});
Meteor.methods({
	getVdoId: function() {
      return Youtubeurls.find().fetch().sort({upldat:-1});
  }
 });   