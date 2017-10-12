// var homepage = function(){
//   $("#nav-icon").click(function(){
//     $("#nav-icon").toggleClass("open");
//   });
//   $("#nav-links").click(function(){
//     $("#nav-icon").toggleClass("open");
//     $(this).collapse("hide");
//   });
//
//
//
//
//
// }(); // execute and return anonymous function

$( document ).ready(function() {
    $("#nav-icon").click(function(){
    $("#nav-icon").toggleClass("open");
  });
  $("#nav-links").click(function(){
    $("#nav-icon").toggleClass("open");
    $(this).collapse("hide");
  });


 $("#nearestBathroom").click(function() {
   /*todo: make bathroom-list.html render on clicking, from there take long/lat*/

   //watch position --battery drain, remember to call clearWatch when done tracking the person
     var watchId = navigator.geolocation.watchPosition(function(position){
       document.getElementById('currentLat').innerHTML = position.coords.latitude;
       document.getElementById('currentLon').innerHTML = position.coords.longitude;
     });



   // check for Geolocation support
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS.');
}


  var startPos;
  var nudge = document.getElementById("nudge");

  var showNudgeBanner = function() {
    nudge.style.display = "block";
  };

  var hideNudgeBanner = function() {
    nudge.style.display = "none";
  };

  var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

  var geoSuccess = function(position) {
    hideNudgeBanner();
    // We have the location, don't display banner
    clearTimeout(nudgeTimeoutId);

    // Do magic with location
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function(error) {
    switch(error.code) {
      case error.TIMEOUT:
        // The user didn't accept the callout
        showNudgeBanner();
        break;
    }
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  /*use clearWatch to remove position tracking*/
   // navigator.geolocation.clearWatch(watchId);

});

});


//simple way to check user location, less sophistocated than stuff above, but easier
// window.onload = function() {
//   var startPos;
//   var geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);
// };