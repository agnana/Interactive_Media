//<script src="/path/to/flickity.pkgd.min.js"></script>//

$( document ).ready(function() {
	console.log( "ready!" );
      $("h2").click(function(){
       $("h2").fadeTo("medium", 0.50);
    });
      $('.ovo-artists').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
   
   
});