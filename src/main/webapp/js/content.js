function getContent(no){ 
	flagship.ajax('../content/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(contents){
			
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
			  				"<a href='#'style='border: 1px solid #ededed' onclick='moveLoc(" + contents[index].no + ")'>" +
			  				"<img class='ui-li-thumb' style='min-height: 87px' src='http://tv03.search.naver.net/nhnsvc?quality=8&size=80x80&q=http://dbscthumb.phinf.naver.net/2765_000_1/20131013135007779_AUPS4Y8LD.jpg/45823.jpg?type=r128_1&wm=N#128x96'>" +
			  				"<h4>" + contents[index].title + "</h4>" +
			  				"<p>" + getDateString(dateObj) + "</p>" +
			  				"</a>" +
			  		"</li>");
			  		$('#oldContentList').append(listTag);
		  	} else {
		  		$('#contentID').prepend("<ul data-role='listview' data-inset='true' id='newContentList'></ul>");
					$('#newContentList').append("<li data-role='list-divider'>현재 여행기</li>");
					listTag = $(
		  				"<li style='margin: 10px'>" + 
		  				"<a href='#'style='border: 1px solid #ededed' onclick='moveLoc(" + contents[index].no + ")'>" +
		  				"<img class='ui-li-thumb' style='min-height: 87px' src='http://tv03.search.naver.net/nhnsvc?quality=8&size=80x80&q=http://dbscthumb.phinf.naver.net/2765_000_1/20131013135007779_AUPS4Y8LD.jpg/45823.jpg?type=r128_1&wm=N#128x96'>" +
		  				"<h4>" + contents[index].title + "</h4>" +
		  				"<p>" + getDateString(dateObj) + "</p>" +
		  				"</a>" +
		  		"</li>");
		  	}
		  	$('#newContentList').append(listTag);
		  }

		  $("#contentID").trigger("create");
			$(".selector").listview("refresh");
			$('#contentID a').removeClass("ui-btn-icon-right");
			$('#contentID ul').removeClass("ui-corner-all ui-shadow");
		},
		error: function(){
			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}

function getDateString(date) {
	var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return daysName[date.getDay()] + " " + monthsName[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function moveLoc(no) {
	location.href="#pagetwo";
	drawPoint(no);
	getLocation(no);
}

//window.onload=function(){ 
//	var xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function() {
//		if(xhr.readyState == 4) { 
//			if(xhr.status == 200) {
//				var jsonResult = JSON.parse(xhr.responseText).jsonResult;
//				if(jsonResult.resultStatus == 1) {
//					alert('시스템이 바쁩니다.\n 나중에 다시 시도해 주세요!');
//					console.log('서버 요청 오류!\n' + jsonResult.error); 
//				} else {
//
//					var contents = jsonResult.data;
//					var div1 = null;
//					var div2 = null;
//					var div3 = null;
//					var imgTag = null;
//					var divclear = null;
//					var pTag = null;
//					var cdate = null;
//					
//					for(var j = 0; j < contents.length; j++){
//						
//					div1 = document.createElement('div');
//					div1.setAttribute("class", "content-grid");
//					document.getElementById('contentID').appendChild(div1);
//					
//					div2 = document.createElement('div');
//					div2.setAttribute("class", "content-grid-pic");
//					div1.appendChild(div2);
//					jQuery(div2).css("float", "left").css("width", "40%");
//					
//					imgTag = document.createElement('img');
//					imgTag.setAttribute('src','http://cfile10.uf.tistory.com/image/18021F4E4D480B940F78F1');
//					div2.appendChild(imgTag);
//					
//					div3 = document.createElement('div');
//					div3.setAttribute('id','content' + j);
//					div3.setAttribute('class','content-grid-info');
//					div3.setAttribute('data-no',contents[j].no);
//					
//					div3.onclick = function(){
//						location.href="#pagetwo";
//						dataCno = this.getAttribute('data-no');
//						drawPoint(dataCno);
//						getLocation(dataCno);
//					}; 
//					
//					div1.appendChild(div3);
//					
//					divclear = document.createElement('div');
//					divclear.setAttribute('class','clear');
//					div1.appendChild(divclear);
//					
//					pTag = document.createElement('p');
//					jQuery(pTag).text(contents[j].title);
//					div3.appendChild(pTag);
//
//					cdate = new Date(contents[j].cdate);
//
//					pTag = document.createElement('p');
//					jQuery(pTag).text(contents[j].cdate);
//					div3.appendChild(pTag);
//					
//					
//					
//					}
//				}
//			}
//		}
//	};
//	xhr.open('GET','../content/ajax/list.do',true);   
//	xhr.send();
//}