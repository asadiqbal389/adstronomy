//Youtubeurls = new Mongo.Collection('videourls');

Meteor.methods({
		uploadVdoId: function(video_id,vdoDes) {
			Youtubeurls.insert({
				videoid: video_id,
				des: vdoDes,
				upldat: new Date()
			});
		}
});
Meteor.methods({
	getVdoId: function() {
      return Youtubeurls.find().fetch().sort({upldat:-1});
  }
 });   