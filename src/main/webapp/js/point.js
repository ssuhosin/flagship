var poly = Array();
var marksArray = Array();
var infowindowArray = Array();
function drawPoint(no) {
	flagship.ajax('../point/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(points){
		  var pointsData = points;
		  centerPoint = new google.maps.LatLng(pointsData[0].lat,pointsData[0].lng);
		  poly = Array();
		  marksArray = Array();
		  var latLng;

		  var markIndex = 0;
		  pointsData.forEach(function(value, key){
		  	latLng = new google.maps.LatLng(value.lat,value.lng); 
		  	if(key != 0) {
		  		poly[poly.length-1]
		  		.getPath()
		  		.push(latLng);
		  	}
		  	
		  	poly.push(new google.maps.Polyline());
		  	poly[poly.length-1].setMap(map);
		  	
		  	poly[poly.length-1]
		  	.getPath()
		  	.push(latLng);
		  	
		  	//http://chart.apis.google.com/chart?chst=d_map_spin&chld=1|0|FFFF42|20|b|1
		  	if(value.state == 1) {
		      var marker = new google.maps.Marker({
		        position: latLng,
		        map: map,
		        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1|0|FFFF42|20|b|' + ++markIndex
//		        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1|0|FFFF42|20|b|장소' + ++markIndex,
		      });
		      marksArray.push(marker);
		      
		      var contentString = "<div>" +
					"<h2>" + value.location.title +"</h2>" +
					"<p>" + value.location.description + "</p>" +
					"</div>";
					var infowindow = new google.maps.InfoWindow({
						content: contentString,
						lno : value.lno
					});
					infowindowArray.push(infowindow);
					//console.log(infowindow);
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.open(map,marker);
					});
		  	}
		  	
		  	if(value.transport != null) {
		  		if(value.transport.state == 0) {
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
		  	}
		  });
		},
		error: function(){
			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
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

var locationIndex = 0;
var baseState = false;
var baseLatLng = "";
var tempLatLng = "";
function positionCalc() {
  var LatLng = new google.maps.LatLng(locations[locationIndex].coords.latitude,locations[locationIndex].coords.longitude);
  if(baseLatLng === "") {
    baseLatLng = LatLng;
    tempLatLng = LatLng;
    baseState = false;

    
    if(lastPoint != null) {
    	var avgSpeed = (kmTo(new google.maps.LatLng(lastPoint.lat,lastPoint.lng), LatLng)*1000)/5;
    	if(avgSpeed >= 50) {
    		if(avgSpeed >= 100) {
    			if(lastPoint.transport == null)
    				addTransport(lastPoint.no,1);
        } else {
        	if(lastPoint.transport == null)
        		addTransport(lastPoint.no,0);
        }
    	} else {
    		if(lastPoint.state == 0) {
    			updateStatePoint(lastPoint.no,1);
        	addLocation(lastPoint.no,contentNo);
    		}
    	}
    }
    
    
    addPoint(baseLatLng,0);
    console.log("1");
  } else {
    var avgSpeed = (kmTo(tempLatLng, LatLng)*1000)/5;
    if(avgSpeed >= 50) {
      if(avgSpeed >= 100) {
      	addTransport(pointNo,1);
      } else {
      	addTransport(pointNo,0);
      }
      
      baseLatLng = LatLng;
      tempLatLng = LatLng;
      addPoint(baseLatLng,0);
      baseState = false;
      console.log("2");
    } else {
      if(baseState == false) {
      	updateStatePoint(pointNo,1);
      	addLocation(pointNo,contentNo);
        baseState = true;
      }
      tempLatLng = LatLng;
      console.log("3");
    } 
  }
  locationIndex++;
}

function addPoint(latLng, state) {
	flagship.ajax('../point/ajax/add.do', {
		method: 'POST',
		data: {
			cno: contentNo,
			lat: latLng.lat(),
			lng: latLng.lng(),
			state: state
    },
		success: function(point){
			pointNo = point.no;
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}

function updateStatePoint(pointNo,state) {
	flagship.ajax('../point/ajax/updateState.do', {
		method: 'POST',
		data: {
			no: pointNo,
			state: state
		},
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
		}});
}

function addTransport(pointNo,state) {
	flagship.ajax('../transport/ajax/add.do', {
		method: 'POST',
		data: {
			pno: pointNo,
			state: state
		},
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
		}});
}

function addLocation(pointNo, contentNo) {
	flagship.ajax('../location/ajax/add.do', {
		method: 'POST',
		data: {
			pno: pointNo,
			cno: contentNo,
			title: "장소",
			description: "내용을 입력하시오"
    },
		success: function(location){
			locationNo = location.no;
			localStorage.setItem("locationNo",location.no);
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}

function getLastPoint(no) {
	flagship.ajax('../point/ajax/listLast.do?no='+no, {
		method: 'GET',
		success: function(point){
			lastPoint = point;
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}