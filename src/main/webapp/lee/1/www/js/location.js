function getLocation(no){ 
	flagship.ajax('location/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(locations){
			var test = "";
			var elementObj;
			locationData = locations;
			$('#locationsID').append("<div id='accordianLoc' data-role='collapsible-set' data-theme='a' data-content-theme='a'></div>");
		  for(var index in locations) {
		  	$('#accordianLoc').append(
		  			"<div data-role='collapsible' style='margin: 10px'>" +
		  			"<h2>" +
		  			'<ul data-role="listview" data-split-icon="edit" data-split-theme="a">' +
		        '<li>' +
		  			'<a href="#" style=" border-left-width: 0px;" id="locationTitleId' + index + '" datano="' + locations[index].no + '">' +
		  			"<input type='hidden' id='editLocationTitleInput" + index + "' style='position: absolute; float: left;' placeholder='제목을 입력하시오'>" +
		        "<h3 id='locationTitle" + index +"' datano='" + locations[index].no + "'>" + locations[index].title + '</h3>' +
		        '</a><a href="#" id="locationEditBtn' + index + '">View Menu</a>' +
		        '</li>' +
		        '</ul>' +
		  			"</h2>" +
		  			"<textarea id='editLocationDescInput" + index + "' style='width:90%; position: absolute; z-index: 9999;display: none;'>adf</textarea>" +
		  			"<p style='display: inline;' id='locationDescId"+ index +"' datano='" + locations[index].no + "'>" + locations[index].description + "</p>" +
		  			'<a href="#" id="locationDescBtn' + index + '" data-role="button" data-icon="edit" data-iconpos="notext" data-theme="c" data-inline="true" style="margin-left:10px; position: relative; top: 0px; left: 0px"></a>' +
		  			
		  			"<button class='ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-camera ui-btn-icon-notext' dataIndex='" + index +"' id='cameraBtn"+ index +"'>" +  
	        	"Camera" + 
	        	"</button>" +
		  	"</div>");
		  	$("#locationEditBtn" + index).on("click", function (event, ui) {
					$(accordianLoc).find('a').removeClass("ui-btn-active");
				  $("#editLocationTitleInput" + this.id.replace("locationEditBtn", "")).attr("type", "text");
				  $("#editLocationTitleInput" + this.id.replace("locationEditBtn", "")).focus();
				  $("#editLocationTitleInput" + this.id.replace("locationEditBtn", "")).val($("#locationTitle" + this.id.replace("locationEditBtn", "")).text());
				  $("#editLocationTitleInput" + this.id.replace("locationEditBtn", "")).select();
				  return false;
				});
		  	
		  	$("#editLocationTitleInput" + index).on("click",function(event,ui){
		  		event.stopPropagation();
		  		$("a").removeClass("ui-btn-active");
		  		return false;
		  	});
		  	
		  	$("#editLocationTitleInput" + index).on("blur",function(event,ui){
		  		$("#locationTitle" + this.id.replace("editLocationTitleInput", "")).text(($(this).val()));
		  		updateTitleLocation($("#locationTitle" + this.id.replace("editLocationTitleInput", "")).attr("dataNo"), $("#locationTitle" + this.id.replace("editLocationTitleInput", "")).text());
		  		$("#editLocationTitleInput" + this.id.replace("editLocationTitleInput", "")).attr("type", "hidden");
	  			for(var i = 0; i < infowindowArray.length; ++i) {
						if(infowindowArray[i].lno == $("#locationTitle" + this.id.replace("editLocationTitleInput", "")).attr("dataNo")) {
							var htmlObject = $(infowindowArray[i].getContent());
							infowindowArray[i].setOptions({content: "<div><h2>" + $("#locationTitle" + this.id.replace("editLocationTitleInput", "")).text() + "</h2><p>" + $(htmlObject.children()[1]).text() + "</p></div>"});
						}
	  			}
		  		return false;
		  	});
		  	
		  	$("#locationDescBtn" + index).on("click", function (event, ui) {
		  		$("#editLocationDescInput" + this.id.replace("locationDescBtn", "")).css("display", "");
				  $("#editLocationDescInput" + this.id.replace("locationDescBtn", "")).val($("#locationDescId" + this.id.replace("locationDescBtn", "")).text());
				  $("#editLocationDescInput" + this.id.replace("locationDescBtn", "")).select();
		  		return false;
		  	});
		  	$("#editLocationDescInput" + index).on("blur",function(event,ui){
		  		$("#locationDescId" + this.id.replace("editLocationDescInput", "")).text(($(this).val()));
		  		updateDescLocation($("#locationDescId" + this.id.replace("editLocationDescInput", "")).attr("dataNo"), $("#locationDescId" + this.id.replace("editLocationDescInput", "")).text());
		  		$(this).css("display", "none");
		  		for(var i = 0; i < infowindowArray.length; ++i) {
	  				if(infowindowArray[i].lno == $("#locationDescId" + this.id.replace("editLocationDescInput", "")).attr("datano")) {
	  					var htmlObject = $(infowindowArray[i].getContent());
	  					infowindowArray[i].setOptions({content: "<div><h2>" + $(htmlObject.children()[0]).text() + "</h2><p>" + $("#locationDescId" + this.id.replace("editLocationDescInput", "")).text() + "</p></div>"});
	  				}
	  			}
		  		return false;
		  	});
		  	
		  	test += index + (index==locations.length-1?"1":",");
		  	
		  	$(document).on("click","#cameraBtn" + index,function(){
					location.href = '#photos-page';
					var photosData = locationData[$(this).attr("dataIndex")].photos;
					var imgTag;
					
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
					}
					console.log(photosData);
				});
		  }
		  console.log(test);
		  $('#accordianLoc').collapsibleset().trigger('create');
		},
		error: function(){
//			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}

function updateTitleLocation(locationNo,title) {
	flagship.ajax('location/ajax/updateTitle.do', {
		method: 'POST',
		data: {
			no: locationNo,
			title: title
		},
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
		}});
}
function updateDescLocation(locationNo,description) {
	flagship.ajax('location/ajax/updateDesc.do', {
		method: 'POST',
		data: {
			no: locationNo,
			description: description
		},
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
		}});
}