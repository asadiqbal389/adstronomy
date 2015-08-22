//Meteor.subscribe("vdoId");

Template.carousel.rendered = function() {
  $('#carousel').slick({
    dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
}

Meteor.call("getVdoId", function(error, vdoIdresults) {
		for (var i = 0; i < vdoIdresults.length; i++) {
    	getYou(vdoIdresults[i].videoid)
    }
});	
getYou = function(vdo_id){
	Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdo_id+"&key=AIzaSyD8D4MCnpUg4MoO81jtZrqD58xDXguWqqk&part=snippet,statistics,contentDetails",
	  function (error, youtubeinforesult) {
	    if (!error) {
	    	var youtubejson = JSON.parse(youtubeinforesult.content);
	    	//youtubejson.items[0].snippet.thumbnails.medium.url;
	    	
	    	$(".slick-track").append("<div class=\"slick-slide slick-active\"><img src=\""+youtubejson.items[0].snippet.thumbnails.medium.url+"\"></div>");
	    	//$(".slick-track").append("<div><img src=\""+youtubejson.items[0].snippet.thumbnails.medium.url+"\" /></div>");
     	}
  });
}