var map;
var centerPoint = new google.maps.LatLng(37.554666,126.970698);
function initialize() {
  var mapOptions = {
  		Zoom : 15,
//  		maxZoom : 15,
//  		minZoom : 10,
      center : new google.maps.LatLng(37.554666,126.970698),
      mapTypeControl : false,
      streetViewControl : false,
      zoomControl : false,
      panControl : false
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  
  var legend = document.createElement('div');
  legend.id = 'legend';
  var content = [];
  content.push('<h3>이동수단</h3>');
  content.push('<p><div class="color walk"></div>Walk</p>');
  content.push('<p><div class="color vehicle"></div>Vehicle</p>');
  legend.innerHTML = content.join('');
  legend.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}