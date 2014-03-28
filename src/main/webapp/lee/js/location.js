function getLocation(no){ 
	flagship.ajax('../location/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(locations){
      
			locationData = locations;
			
			$('#locationsID').append("<div id='accordianLoc' data-role='collapsible-set' data-theme='a' data-content-theme='a'></div>");
		  for(var index in locations) {
			$('#accordianLoc').append(
		  			"<div data-role='collapsible' style='margin: 10px' data-theme='b'>" +
		        	"<h3>" + locations[index].title + "</h3>" +
		        	"<p>" + locations[index].description +"</p>" +
		        	
		        	"<button class='ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-camera ui-btn-icon-notext' dataIndex='" + index +"' id='cameraBtn"+ index +"'>" +  
		        	"Camera" + 
		        	"</button>" +
		        	
		        	"</div>" +
		        "</div>");
			
			$(document).on("click","#cameraBtn" + index,function(){
				location.href = '#photos-page';
				var photosData = locationData[$(this).attr("dataIndex")].photos;
//				var photosData = JSON.parse(localStorage["photos"]).photos;
				var imgTag;
				
//				$( ".remove-item" ).popup({
//				  create: function( event, ui ) {}
//				});
				
				for(var index in photosData){
					imgTag = $(
							"<div class='remove-item'>" +
							"<div class='gallery-item'>" + "<a href='#popup" + index + "' data-rel='popup' data-position-to='window' data-transition='fade'>" + 
							"<img src='"+ photosData[index].path +"' style='overflow:visible;'/>" +  "</a>" + "</div>" +
							
							"<div data-role='popup' id='popup" + index +"' data-overlay-theme='b' data-theme='b' data-corners='false'>" +
							"<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right'>" + "</a>" +
							"<img class='popphoto' src='" + photosData[index].path + "'>" +
							"</div>" + "</div>"
					);
					$('#ccc').append(imgTag);
					$('#ccc').trigger('create');
//					$("#popup").popup();
					
				}
				console.log(photosData);
			});
		}
		  $('#accordianLoc').collapsibleset().trigger('create');
		},
		error: function(){
			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}
		});
}