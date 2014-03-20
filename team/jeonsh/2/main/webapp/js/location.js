function getLocation(){ 
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) { 
			if(xhr.status == 200) {
				var jsonResult = JSON.parse(xhr.responseText).jsonResult;
				if(jsonResult.resultStatus == 1) {
					alert('시스템이 바쁩니다.\n 나중에 다시 시도해 주세요!');
					console.log('서버 요청 오류!\n' + jsonResult.error); 
				} else {

					var contents = jsonResult.data;
					var div1 = null;
					var div2 = null;
					var div3 = null;
					var imgTag = null;
					var divclear = null;
					var pTag = null;
					var cdate = null;
					
					
			   	$('#horizontalTab').append("<div class='resp-tabs-container'></div>");
			   	for(var i = 0; i<4; ++i) {
			   	    $('#horizontalTab .resp-tabs-container').append(
					      "<div class='tab-'" + i + ">" +
					      "<a href='#'></a>" +
					      "<p>Resurgent economies, set of complex and intriguing.</p>"+
					      "</div>"
					    );
			   	}

					for(var j = 0; j < contents.length; j++){
						div1 = document.createElement('div');
						div1.setAttribute("class", "latest-news-tab-grid frist-news-grid");

						document.getElementById('contentID').appendChild(div1);
						jQuery(div1).css("background","#E1E2E9").css("margin-bottom","1px").css("margin","0.7em 0").css("cursor","pointer");

						div2 = document.createElement('div');
						div2.setAttribute("class", "latest-news-tab-grid-pic");
						div1.appendChild(div2);
						jQuery(div2).css("float","left").css("width","40%");


						imgTag = document.createElement('img');
						imgTag.setAttribute('src','http://www.nemopan.com/files/attach/images/16448/367/965/005/%ED%95%9C%EC%98%88%EC%8A%AC.jpg');
						div2.appendChild(imgTag);
						jQuery(imgTag).css("display","block").css("width","block");

						div3 = document.createElement('div');
						div3.setAttribute('id','content' + j);
						div3.setAttribute('class','latest-news-tab-grid-info');
						div3.setAttribute('data-no',contents[j].no);
						
						div3.onclick = function(){
							location.href="#pagetwo";
							dataCno = this.getAttribute('data-no');
							drawPoint(dataCno);
						}; 
						
						div1.appendChild(div3);
						jQuery(div3).css("float","right").css("width","57%").css("padding",".3em 0");

						divclear = document.createElement('div');
						divclear.setAttribute('class','clear');
						div1.appendChild(divclear);

						pTag = document.createElement('p');
						jQuery(pTag).text(contents[j].title);
						div3.appendChild(pTag);
						jQuery(pTag).css("font-size","0.875em").css("color","#0F112A").css("width","97%").css("line-height","1.5em");

						cdate = new Date(contents[j].cdate);

						pTag = document.createElement('p');
						jQuery(pTag).text(contents[j].cdate);
						div3.appendChild(pTag);
						jQuery(pTag).css("font-size","0.875em").css("color","#0F112A").css("width","97%").css("line-height","1.5em");
					}
				}
			}
		}
	};
	xhr.open('GET','../location/ajax/list.do',true);   
	xhr.send();
}