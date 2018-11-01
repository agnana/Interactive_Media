$( document ).ready(function() {
    console.log( "ready!" );
    //entire js for the clock + setting variables for each component
    var $dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm'),
    //setting variable enterhit to alter the alpha value w/ neon sign (enter button)
    $enterHit = 0;
	var months = [
	  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
	];

	var days = [
	  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	];

	function update(){
	  //getting realtime
	  var date = new Date();
	  
	  var ampm = date.getHours() < 12
	             ? 'AM'
	             : 'PM';
	  
	  var hours = date.getHours() == 0
	              ? 12
	              : date.getHours() > 12
	                ? date.getHours() - 12
	                : date.getHours();
	  
	  var minutes = date.getMinutes() < 10 
	                ? '0' + date.getMinutes() 
	                : date.getMinutes();
	  
	  var seconds = date.getSeconds() < 10 
	                ? '0' + date.getSeconds() 
	                : date.getSeconds();
	  
	  var dayOfWeek = days[date.getDay()];
	  var month = months[date.getMonth()];
	  var day = date.getDate();
	  var year = date.getFullYear();
	  
	  var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
	  
	  $dOut.text(dateString);
	  $hOut.text(hours);
	  $mOut.text(minutes);
	  $sOut.text(seconds);
	  $ampmOut.text(ampm);
	} 

	update();

	window.setInterval(update, 2000);
    //the navigation heading set to fade in + out
    $('h1.navigation').fadeOut(0);
    $('h1.navigation').fadeIn(2500);
   

    $(document).keydown(function(e){
	//console.log(e.keyCode) - this shows what the key is for each button you press

	//38 == upButton.
	if (e.keyCode == 38) {
	fs =$('.neon').css("font-size").replace("px","")
	fs= parseInt(fs)+1	

	$(".neon").css({
		"font-size":fs+"px"
	})

	console.log(fs)
	}

	// 40 == downButton.
 	if (e.keyCode == 40) {
		fs =$('.neon').css("font-size").replace("px","")
		fs= parseInt(fs)-1	

	$(".neon").css({
		"font-size":fs+"px"	
	})
	
	console.log(fs)
	}

	// 13== enter.
	if (e.keyCode == 13) {
	$enterHit = $enterHit+35;

	if ($enterHit >= 255) {
	$enterHit = 0
	}
		$(".neon").css('color', 'rgb(0,0,0,'+$enterHit+')');
		console.log($enterHit)
	} 

	// 32 == spaceBar
	if (e.keyCode == 32) {
		
		$(".unit").toggleClass('active');		
		// this is how to toggle using a key element
	} 

	// 39 == rightArrow
	if (e.keyCode == 39) {

		$("#date").css({'background-color': '#FFF', 'color': '#000', 'opacity': '0.75'});
	} 

	// 37 == leftArrow
	if (e.keyCode == 37) {

		$("#date").css({'background-color': '#E23171', 'color': '#FFF', 'opacity': '0.75'});
	} 

})
    });



