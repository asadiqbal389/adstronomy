// getRecentVid = function(vId){
// 	Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vId+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
// 	  function (error, youinforesult) {
// 	    if (!error) {
// 	    	var youtubejson = JSON.parse(youinforesult.content);
// 	    	var vdo_dur = youtubejson.items[0].contentDetails.duration;
// 	    		$(".cat-list-vedio").append('<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">'+
// 																		    '<header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white" style="background-image:url(\''+youtubejson.items[0].snippet.thumbnails.medium.url+'\')">'+
// 																		      '<i class="material-icons">play_circle_filled</i>'+
// 																		    '</header>'+
// 																		    '<div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone single-card">'+
// 																		      '<div class="mdl-card__supporting-text">'+
// 																		        '<h4>'+youtubejson.items[0].snippet.title+'</h4>'+
// 																		      '</div>'+
// 																		      '<div class="mdl-card__actions">'+
// 														                '<a class="mdl-button">Duration : '+vdo_dur.replace("PT","").replace("H",":").replace("M",":").replace("S","")+'</a>'+
// 														                '<a class="mdl-button">Views : '+youtubejson.items[0].statistics.viewCount+'</a>'+
// 														              '</div>'+
// 																		    '</div>'+
// 																			'</section>');	
	    	
// 	    	//$(".slick-track").append("<div class=\"slick-slide slick-active\"><img src=\""+youtubejson.items[0].snippet.thumbnails.medium.url+"\"></div>");
// 	    }
//   });
// }