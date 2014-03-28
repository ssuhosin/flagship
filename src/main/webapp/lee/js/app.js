window.onload = function() {
	var newHeight = $("html").height() - $("#pagethreeHeader").height() - 2*parseInt($("#pagethreeMain").css("padding-top")) - 2*parseInt($("#pagethreeMain").css("padding-bottom")) + "px";
  $("#map_canvas").css("height", newHeight);
// 	if(document.getElementById('newContentList')) {
//     $('#startBtn').text("Stop");  
//   }
  
  flagship('loginBtn').click( function() {
    flagship.ajax( '../auth/ajax/login.do', {
        method: 'POST',
        data: {
          email: $('#emailText').val(),
          password: $('#passwordText').val()
        },
        success: function(members){
          if(members) {
            location.href = '#pageone';
            memberNo = members.no;
            getContent(members.no);
          } else {
            alert("입력이 잘못되었습니다.");
          }
    }});
  });

  flagship('joinBtn').click( function() {
  	flagship.ajax( '../member/ajax/join.do', {
  		method: 'POST',
  		data: {
  			email: $('#emailJoinText').val(),
  			pwd: $('#passwordJoinText').val()
  		},
  		success: function(){
  			location.href = '#pagelogin';
  		},
  		error: function(message){
  			alert(message);
  		}});
  });

  flagship('startBtn').click( function() {
  	if(document.getElementById('newContentList') == null) {
	    flagship.ajax( '../content/ajax/add.do', {
	        method: 'POST',
	        data: {
	          mno: memberNo,
	          title: $('#titleText').val(),
	          freq: $('#freqSelect').val(),
	          speed: $('#speedSelect').val(),
	          state: 0
	        },
	        success: function(content){
	        	contentNo = content.no;
	        	//
	        	localStorage.setItem("contentNo", contentNo);
	        	//
// 	        	currentContentNo = content.no;
//         	$('#startBtn').text("Stop");
	        	$("#contentID").children().each(function(index, value){
	        		document.getElementById('contentID').removeChild(value);
	        	});
	          getContent(memberNo);
	          
	          console.log(locations.length);
	          var intervalSec = 1000;
	          locationIndex = 0;
	          var intervalID = setInterval(function () {
	            positionCalc();
	            
	          }, intervalSec);

	          setTimeout(function () {
	            clearInterval(intervalID);
	          }, (locations.length + 1) * intervalSec);
	    }});
  	}
  });
  
  flagship('endBtn').click( function() {
    if(document.getElementById('newContentList')) {
      flagship.ajax( '../content/ajax/updateState.do', {
          method: 'POST',
          data: {
            mno: memberNo,
            state: 1
          },
          success: function(){
          	//
          	localStorage.setItem("contentNo", null);
          	//
            $("#contentID").children().each(function(index, value){
              document.getElementById('contentID').removeChild(value);
            });
            getContent(memberNo);
      }});
    }
  });

  flagship('logOutBtn').click( function() {
  	$("#contentID").children().each(function(index, value){
      document.getElementById('contentID').removeChild(value);
    });
  	location.href = '#pagelogin';
  });

//  flagship('contentBackBtnID').click( function() {
//
//  });
};




//function drawPoint(no) {
//	bit.ajax('../point/ajax/list.do?no='+no, {
//		method: 'GET',
//		success: function(points){
//		  var pointsData = points;
//		  centerPoint = new google.maps.LatLng(pointsData[0].lat,pointsData[0].lng);
//		  var poly = Array();
//		  var marksArray = Array();
//		  var latLng;
//
//		  pointsData.forEach(function(value, key){
//		  	latLng = new google.maps.LatLng(value.lat,value.lng); 
//		  	if(key != 0) {
//		  		poly[poly.length-1]
//		  		.getPath()
//		  		.push(latLng);
//		  	}
//		  	
//		  	poly.push(new google.maps.Polyline());
//		  	poly[poly.length-1].setMap(map);
//		  	
//		  	poly[poly.length-1]
//		  	.getPath()
//		  	.push(latLng);
//		  	
//		  	
//		  	if(value.state == 1) {
//		      var marker = new google.maps.Marker({
//		        position: latLng,
//		        map: map
//		      });
//		      marksArray.push(marker);
//		  	}
//		  	
//		  	if(value.transport != null) {
//		  		if(value.transport.state == 0) {
//		  			poly[poly.length-1].setOptions({
//		  				strokeColor: '#00FF00',
//		  				strokeOpacity: 0.7,
//		  				strokeWeight: 4,
//		  				icons: [{
//		  					icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
//		  					offset: '100%'
//		  				}]
//		  			});
//		  		} else {
//		  			poly[poly.length-1].setOptions({
//		  				strokeColor: '#00BFFF',
//		  				strokeOpacity: 0.7,
//		  				strokeWeight: 4,
//		  				icons: [{
//		  					icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
//		  					offset: '100%'
//		  				}]
//		  			});
//		  		}
//		  	}
//		  });
//		},
//		error: function(){
//			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
//	}});
//}