$( document ).ready(function() {
  $(".ovo-artist-cell").click(function(){
  $(".ovo-artist-cell").fadeTo("medium", 0.50);
});

$carousel =  $('.ovo').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
$("#toggle").click(function() {
  $(this).toggleClass("toggle-active"); //on click, the hamburger menu elements get the toggle-active class and the overlay gets the nav-active class
  $("#overlay").toggleClass("nav-active");

$("h1").toggleClass("hidden"); //the h1 element toggles between visibility and invisibility
});

$(".button").click(function(){
i = $(this).attr("data-index")
$carousel.flickity( 'select', i )
})

});