window.onload=function(){ 
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
					
					for(var j = 0; j < contents.length; j++){
						
					div1 = document.createElement('div');
					div1.setAttribute("class", "content-grid");
					document.getElementById('contentID').appendChild(div1);
					
					div2 = document.createElement('div');
					div2.setAttribute("class", "content-grid-pic");
					div1.appendChild(div2);
					jQuery(div2).css("float", "left").css("width", "40%");
					
					imgTag = document.createElement('img');
					imgTag.setAttribute('src','http://cfile10.uf.tistory.com/image/18021F4E4D480B940F78F1');
					div2.appendChild(imgTag);
					
					div3 = document.createElement('div');
					div3.setAttribute('id','content' + j);
					div3.setAttribute('class','content-grid-info');
					div3.setAttribute('data-no',contents[j].no);
					
					div3.onclick = function(){
						location.href="#pagetwo";
						dataCno = this.getAttribute('data-no');
						drawPoint(dataCno);
						getLocation(dataCno)
					}; 
					
					div1.appendChild(div3);
					
					divclear = document.createElement('div');
					divclear.setAttribute('class','clear');
					div1.appendChild(divclear);
					
					pTag = document.createElement('p');
					jQuery(pTag).text(contents[j].title);
					div3.appendChild(pTag);

					cdate = new Date(contents[j].cdate);

					pTag = document.createElement('p');
					jQuery(pTag).text(contents[j].cdate);
					div3.appendChild(pTag);
					
					
					
					}
				}
			}
		}
	};
	xhr.open('GET','../content/ajax/list.do',true);   
	xhr.send();
}