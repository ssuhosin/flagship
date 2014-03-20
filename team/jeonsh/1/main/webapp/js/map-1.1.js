var map;
function initialize() {
  var mapOptions = {
  		Zoom : 15,
//  		maxZoom : 15,
//  		minZoom : 10,
      center : new google.maps.LatLng(37.554666,126.970698),
      mapTypeControl : false,
      streetViewControl : false,
      zoomControl : true,
      panControl : false
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}
