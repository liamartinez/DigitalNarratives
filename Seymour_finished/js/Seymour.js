// STEP 10: As soon as the page loads, apply the class “wait” to Seymour
$(document).ready(function() {
	$('.seymour').addClass('wait');
});

//STEP 11: When Seymour is tapped on, apply the class “hide”
$('.seymour').click(function () {
	$('.seymour').addClass('hide');
	//step 12: After 8 seconds, remove the class “hide” and go back to “wait”
	setTimeout(function() {
		$('.seymour').removeClass('hide');
		$('.seymour').addClass('wait');
	}, 8000)
});

var mouseX = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
});

// cache the selector
var follower = $('.seymour');
var xp = 0;
var loop = setInterval(function(){
    // change 100 to alter damping, higher is slower
    xp += (mouseX - xp) / 100;
    follower.css({left:xp});
    // change 2 to alter speed, higher is slower
}, 2);