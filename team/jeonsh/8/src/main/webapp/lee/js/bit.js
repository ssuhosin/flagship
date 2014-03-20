function bit(id) {
	//return document.getElementById(id);
	var element = document.getElementById(id);
	element.click = function(listener) { //ex) 조미료를 뿌림 
		this.onclick = listener;
	};
	
	return element; // ex) 조미료를 뿌린 감자를 리턴
}


bit.ajax = function(url, settings) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var jsonResult = JSON.parse(xhr.responseText).jsonResult;
				if (jsonResult.resultStatus == 1) {
					if(settings.error) {
						settings.error(jsonResult.error);
					}
				} else {
					if(settings.success) {
						settings.success(jsonResult.data)
					}
				}
			} else {
				if(settings.error) {
					settings.error("요청 실패");
				}
			}
		}
	};
	xhr.open(settings.method, url,	true);
	if(settings.method == 'POST') {
		var params = '';
		for(var propName in settings.data) { //객체가 만들어진 후 등록된 프라퍼티만 가져온다.
			if(params.length > 0) {
				params += '&';
			}
			params += propName + "=" + settings.data[propName];
		}
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');//서버에 보내는 콘텐트 타입 
		//포스트방신은 url에 실어서 보내면 안되고 send로 보내야한다.
		xhr.send(encodeURI(params)); //한글은 URI인코딩 문자로 바꾸어라(브라우저에서는 괜찮은데 코딩상에서 ajax로 보낼 때 uri인코딩해서 보내야한다. 네트워크 장비 때문에)
	} else {
		xhr.send(); //GET방식은 URL에 포함되기 때문에 파라미터로 넘길 필요가 없다.
	}
};

//var $ = bit;