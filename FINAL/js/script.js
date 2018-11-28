$( document ).ready(function() {
	console.log( "ready!" );

      $("h2").click(function(){
       $("h2").fadeTo("medium", 0.50);
    });
      $('.ovo').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
});
      $("#toggle").click(function() {

  //on click, the hamburger menu elements get the toggle-active class and the overlay gets the nav-active class
  $(this).toggleClass("toggle-active");
  $("#overlay").toggleClass("nav-active");

  //the h1 element toggles between visibility and invisibility
  $("h1").toggleClass("hidden");
});
   
});