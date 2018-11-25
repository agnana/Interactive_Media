$( document ).ready(function() {
	console.log( "ready!" );
      $("h2").click(function(){
       $("h2").fadeTo("medium", 0.50);
    });
      $('.ovo').flickity({
	  // options
	  cellAlign: 'left',
	  autoPlay: 1500
});
   
   
});