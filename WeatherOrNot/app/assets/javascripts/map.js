$(document).ready(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var frisco = new google.maps.LatLng(37.7833, -122.4167);
  var map;

  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: frisco,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);
    directionsDisplay.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  function calcRoute() {
    // var start = document.getElementById("start").value;
    // var end = document.getElementById("end").value;
    var request = {
      origin: "San Francisco, CA",
      destination: "Los Angeles, CA",
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  }
});