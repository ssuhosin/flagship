function drawPoint(no) {
	flagship.ajax('../point/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(points){
		  var pointsData = points;
		  centerPoint = new google.maps.LatLng(pointsData[0].lat,pointsData[0].lng);
		  var poly = Array();
		  var marksArray = Array();
		  var latLng;

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
		  	
		  	
		  	if(value.state == 1) {
		      var marker = new google.maps.Marker({
		        position: latLng,
		        map: map
		      });
		      marksArray.push(marker);
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