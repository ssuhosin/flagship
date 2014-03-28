function getContent(no){ 
	flagship.ajax('content/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(contents){
			var elementObj;
			var dateStrArray;
			var dateObj;
			var listTag;
			$('#contentID').append("<ul data-role='listview' data-inset='true' id='oldContentList'></ul>");
			$('#oldContentList').append("<li data-role='list-divider'>지난 여행기</li>");
		  for(var index in contents) {
		  	dateStrArray = contents[index].cdate.split("-");
		  	dateObj = new Date(dateStrArray[0],dateStrArray[1],dateStrArray[2]);
		  	
		  	if(contents[index].state == 1) {
			  		listTag = $(
			  				"<li style='margin: 10px'>" + 
			  				"<a href='#' style='border: 1px solid #ededed' id='content" + index + "' dataNo='" + contents[index].no + "'>" +
			  				"<img class='ui-li-thumb' style='min-height: 87px' src='http://tv03.search.naver.net/nhnsvc?quality=8&size=80x80&q=http://dbscthumb.phinf.naver.net/2765_000_1/20131013135007779_AUPS4Y8LD.jpg/45823.jpg?type=r128_1&wm=N#128x96'>" +
			  				"<input type='hidden' id='editContentInput" + index + "' style='width:60%; position: absolute; z-index: 9999;' placeholder='제목을 입력하시오'>" +
			  				"<h4 id='contentTitleId" + index + "' dataNo='" + contents[index].no + "'>" + contents[index].title + "</h4>" +
			  				"<p>" + getDateString(dateObj) + "</p>" +
			  				'<a href="#" id="contentEditBtn' + index + '" style="border: 1px solid #ededed" data-role="button" data-icon="edit" data-iconpos="notext" data-theme="c" data-inline="true">Edit</a>' +
			  				"</a>" +
			  				"</li>");
			  		$('#oldContentList').append(listTag);
						$('#content' + index).on("click", function(event, ui){
							moveLoc($(this).attr("datano"));
							return false;
						});
			  		$("#contentEditBtn" + index).on("click", function (event, ui) {
						  $("#editContentInput" + this.id.replace("contentEditBtn", "")).attr("type", "text");
						  $("#editContentInput" + this.id.replace("contentEditBtn", "")).val($("#contentTitleId" + this.id.replace("contentEditBtn", "")).text());
						  $("#editContentInput" + this.id.replace("contentEditBtn", "")).select();
						  return false;
						});
			  		$("#editContentInput" + index).on("click", function (event, ui) {
			  			event.stopPropagation();
			  			return false;
			  		});
			  		$("#editContentInput" + index).on("blur",function(event,ui){
			  			$("#contentTitleId" + this.id.replace("editContentInput", "")).text(($(this).val()));
			  			updateTitlePoint($("#contentTitleId" + this.id.replace("editContentInput", "")).attr("dataNo"), $("#contentTitleId" + this.id.replace("editContentInput", "")).text());
			  			$(this).attr("type", "hidden");
			  			return false;
			  		});
		  	} else {
		  		contentNo = contents[index].no;
		  		console.log(contents[index].no);
		  		getLastPoint(contentNo);
		  		$('#contentID').prepend("<ul data-role='listview' data-inset='true' id='newContentList'></ul>");
					$('#newContentList').append("<li data-role='list-divider'>현재 여행기</li>");
					listTag = $(
		  				"<li style='margin: 10px'>" + 
		  				"<a href='#' style='border: 1px solid #ededed' id='content" + index + "' dataNo='" + contents[index].no + "'>" +
		  				"<img class='ui-li-thumb' style='min-height: 87px' src='http://tv03.search.naver.net/nhnsvc?quality=8&size=80x80&q=http://dbscthumb.phinf.naver.net/2765_000_1/20131013135007779_AUPS4Y8LD.jpg/45823.jpg?type=r128_1&wm=N#128x96'>" +
		  				"<input type='hidden' id='editContentInput" + index + "' style='width:60%; position: absolute; z-index: 9999;' placeholder='제목을 입력하시오'>" +
		  				"<h4 id='contentTitleId" + index + "' dataNo='" + contents[index].no + "'>" + contents[index].title + "</h4>" +
		  				"<p>" + getDateString(dateObj) + "</p>" +
		  				'<a href="#" id="contentEditBtn' + index + '" style="border: 1px solid #ededed" data-role="button" data-icon="edit" data-iconpos="notext" data-theme="c" data-inline="true">Edit</a>' +
		  				"</a>" +
		  				"</li>");
					$('#newContentList').append(listTag);
					$('#content' + index).on("click", function(event, ui){
						moveLoc($(this).attr("datano"));
						return false;
					});
		  		$("#contentEditBtn" + index).on("click", function (event, ui) {
					  $("#editContentInput" + this.id.replace("contentEditBtn", "")).attr("type", "text");
					  $("#editContentInput" + this.id.replace("contentEditBtn", "")).val($("#contentTitleId" + this.id.replace("contentEditBtn", "")).text());
					  $("#editContentInput" + this.id.replace("contentEditBtn", "")).select();
					  return false;
					});
		  		$("#editContentInput" + index).on("click", function (event, ui) {
		  			event.stopPropagation();
		  			return false;
		  		});
		  		$("#editContentInput" + index).on("blur",function(event,ui){
		  			$("#contentTitleId" + this.id.replace("editContentInput", "")).text(($(this).val()));
		  			updateTitlePoint($("#contentTitleId" + this.id.replace("editContentInput", "")).attr("dataNo"), $("#contentTitleId" + this.id.replace("editContentInput", "")).text());
		  			$(this).attr("type", "hidden");
		  			return false;
		  		});
		  	}
		  }

		  $("#contentID").trigger("create");
			$(".selector").listview("refresh");
			$('#contentID a').removeClass("ui-btn-icon-right");
			$('#contentID ul').removeClass("ui-corner-all ui-shadow");
			$('#contentID a').removeClass("ui-corner-all ui-shadow");
		},
		error: function(){
//			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}

function getDateString(date) {
	var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return daysName[date.getDay()] + " " + monthsName[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function moveLoc(no) {
	if(contentNo != null && contentNo == no) {
		var intervalSec = 10000;
		mapIntervalID = setInterval(function () {
      for(var i=0; i<poly.length; i++){
        poly[i].setMap(null);
      }
      for(var i=0; i<marksArray.length; i++){
        marksArray[i].setMap(null);
      }
      if(document.getElementById('accordianLoc')) {
	      document.getElementById('locationsID').removeChild(document.getElementById('accordianLoc'));
      }
      getLocation(contentNo);
      drawPoint(contentNo);
    }, intervalSec);
		location.href="#pagetwo";
	} else {
		location.href="#pagetwo";
		drawPoint(no);
		getLocation(no);
	}
}

function updateTitlePoint(contentNo,title) {
	flagship.ajax('content/ajax/updateTitle.do', {
		method: 'POST',
		data: {
			no: contentNo,
			title: title
		},
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
		}});
}