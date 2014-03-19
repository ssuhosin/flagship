var intervalSec = 1000;
var locationIndex = 0;
var baseState = false;
var baseLatLng = "";
var tempLatLng = "";
// var pointsArray = Array();
// var pathsArray = Array();
var marksArray = Array();
var positionArray = Array();
var map;

function Marker(position) {
	this.position = position;
}
function Position(position) {
  this.position = position;
}
function Transport(transport) {
  this.transport = transport;
}

var locations = Array();
locations.push({ coords:{latitude:37.554666,longitude:126.970698}});
locations.push({ coords:{latitude:37.554538,longitude:126.970902}});
locations.push({ coords:{latitude:37.554589,longitude:126.971299}});
locations.push({ coords:{latitude:37.554912,longitude:126.971718}});
locations.push({ coords:{latitude:37.55498,longitude:126.971052}});
locations.push({ coords:{latitude:37.554121,longitude:126.970301}});
locations.push({ coords:{latitude:37.554453,longitude:126.971846}});
locations.push({ coords:{latitude:37.554461,longitude:126.971353}});
locations.push({ coords:{latitude:37.553696,longitude:126.970784}});
locations.push({ coords:{latitude:37.554385,longitude:126.972265}});


locations.push({ coords:{latitude:37.552505,longitude:126.976792}});
locations.push({ coords:{latitude:37.552173,longitude:126.98206}});
locations.push({ coords:{latitude:37.553313,longitude:126.982328}});
locations.push({ coords:{latitude:37.553577,longitude:126.9825}});
locations.push({ coords:{latitude:37.553781,longitude:126.982232}});
locations.push({ coords:{latitude:37.554036,longitude:126.98176}});
locations.push({ coords:{latitude:37.553424,longitude:126.982167}});
locations.push({ coords:{latitude:37.553747,longitude:126.981084}});
locations.push({ coords:{latitude:37.554147,longitude:126.980547}});
locations.push({ coords:{latitude:37.553994,longitude:126.981449}});
locations.push({ coords:{latitude:37.553628,longitude:126.981213}});


locations.push({ coords:{latitude:37.560041,longitude:126.975707}});
locations.push({ coords:{latitude:37.575884,longitude:126.976975}});
locations.push({ coords:{latitude:37.576573,longitude:126.977168}});
locations.push({ coords:{latitude:37.576785,longitude:126.97794}});
locations.push({ coords:{latitude:37.577669,longitude:126.978284}});
locations.push({ coords:{latitude:37.578112,longitude:126.979163}});
locations.push({ coords:{latitude:37.578826,longitude:126.978466}});
locations.push({ coords:{latitude:37.579123,longitude:126.97794}});
locations.push({ coords:{latitude:37.579608,longitude:126.97896}});
locations.push({ coords:{latitude:37.580348,longitude:126.978305}});
locations.push({ coords:{latitude:37.581292,longitude:126.97764}});
locations.push({ coords:{latitude:37.581275,longitude:126.978734}});
locations.push({ coords:{latitude:37.581615,longitude:126.979056}});
locations.push({ coords:{latitude:37.581938,longitude:126.979485}});


locations.push({ coords:{latitude:37.579549,longitude:126.982178}});
locations.push({ coords:{latitude:37.584769,longitude:126.982016}});
locations.push({ coords:{latitude:37.589938,longitude:126.979784}});
locations.push({ coords:{latitude:37.590295,longitude:126.985342}});
locations.push({ coords:{latitude:37.589887,longitude:126.986844}});


locations.push({ coords:{latitude:37.583681,longitude:126.990856}});
locations.push({ coords:{latitude:37.582711,longitude:126.991586}});
locations.push({ coords:{latitude:37.580909,longitude:126.991672}});
locations.push({ coords:{latitude:37.58096,longitude:126.992916}});
locations.push({ coords:{latitude:37.580331,longitude:126.991178}});
locations.push({ coords:{latitude:37.579447,longitude:126.991028}});


locations.push({ coords:{latitude:37.576147,longitude:126.993152}});
locations.push({ coords:{latitude:37.574872,longitude:126.994912}});

function kmTo(aa,a) {
  var e = Math, ra = e.PI/180;
  var b = aa.lat() * ra, c = a.lat() * ra, d = b - c;
  var g = aa.lng() * ra - a.lng() * ra;
  var f = 2 * e.asin(e.sqrt(e.pow(e.sin(d/2), 2) + e.cos(b) * e.cos(c) * e.pow(e.sin(g/2), 2)));
  return f * 6378.137;
};

var intervalID = setInterval(function () {
  positionCalc();
  drawMap();
}, intervalSec);

setTimeout(function () {
  clearInterval(intervalID);
}, (locations.length + 1) * intervalSec);

function positionCalc() {
  //var LatLng = locations[locationIndex].coords;
  var LatLng = new google.maps.LatLng(locations[locationIndex].coords.latitude,locations[locationIndex].coords.longitude);
  if(baseLatLng === "") {
    baseLatLng = LatLng;
    tempLatLng = LatLng;
    baseState = false;
    
    positionArray.push(new Position(baseLatLng));
    console.log("패스 : " + baseLatLng);
  } else {
    var avgSpeed = (kmTo(tempLatLng, LatLng)*1000)/5;
    if(avgSpeed >= 50) {
    	console.log("패스 : " + LatLng);
      if(avgSpeed >= 100) {
      	positionArray.push(new Transport("Car"));
      	console.log("Transfer");
      } else {
      	positionArray.push(new Transport("Walk"));
      	console.log("Walk");
      }
      
      baseLatLng = LatLng;
      tempLatLng = LatLng;
    	positionArray.push(new Position(baseLatLng));
      baseState = false;
    } else {
      if(baseState == false) {
      	var marker = new Marker(baseLatLng);
      	positionArray.push(marker);
      	//marksArray.push(marker);
      	console.log("마크 : " + baseLatLng);
        baseState = true;
      }
      tempLatLng = LatLng;
    } 
  }
  locationIndex++;
}

function initialize() {
  var mapOptions = {
      zoom : 15,
      center : new google.maps.LatLng(37.554666,126.970698),
      mapTypeControl : false,
      streetViewControl : false,
      zoomControl : false,
      panControl : false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize&key=AIzaSyDWJdvu0r-PykFWvN6sv63RDrRmkGNxsRU';
  document.body.appendChild(script);
}

//window.onload = loadScript;

var poly = Array();
var path;
function drawMap() {
	for(var i=0; i<poly.length; i++){
		poly[i].setMap(null);
  }
	
	for(var i=0; i<marksArray.length; i++){
    marksArray[i].setMap(null);
  }

  poly.push(new google.maps.Polyline());
  poly[poly.length-1].setMap(map);
  //poly.setMap(map);
  //path = poly.getPath();
  
  var polyFlag = true;
  positionArray.forEach(function(value, key){
    if(value.constructor == Position) {
      //console.log(value.position);
    	 if(polyFlag == true) {
         polyFlag = false;
         var polyValue = poly[poly.length-1];
         path = polyValue.getPath();
         path.push(value.position);
	       //path.push(value.position);
       } else {
      	 var polyValue = poly[poly.length-1];
         path = polyValue.getPath();
         path.push(value.position);
	       //path.push(value.position);
         polyFalg = true;
         
         poly.push(new google.maps.Polyline());
         var polyValue = poly[poly.length-1];
         polyValue.setMap(map);
         path = polyValue.getPath();
         path.push(value.position);
       }
    } else if(value.constructor == Transport) {

    	if(value.transport == "Walk") {
        poly[poly.length-1].setOptions({
          strokeColor: '#00FF00',
          strokeOpacity: 0.7,
          strokeWeight: 4,
          icons: [{
            icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
            offset: '100%'
          }]
        });
        
      } else {
        poly[poly.length-1].setOptions({
          strokeColor: '#00BFFF',
          strokeOpacity: 0.7,
          strokeWeight: 4,
          icons: [{
            icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
            offset: '100%'
          }]
        });
      }
    } else if(value.constructor == Marker) {
      //console.log(value.position);
      var marker = new google.maps.Marker({
        position: value.position,
        map: map
      });
        //icon: 'p2.png'
      marksArray.push(marker);
      
//      var testIDTag = document.getElementById("testID");
//      var divTag = document.createElement("div");
//      jQuery(divTag).text("장소설명을 입력하세요.");
//      testIDTag.appendChild(divTag);
    }
  });
  
	google.maps.event.trigger(map, 'resize');
	//map.setCenter(new google.maps.LatLng(37.554666,126.970698));
}
