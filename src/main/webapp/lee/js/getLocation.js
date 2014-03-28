function getLocation(no){ 
	flagship.ajax('../location/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(locations){
			$('#photoList').append("<div class='ccc' id='ccc'>");
		  for(var index in locations) {
		  	$('#ccc').append(
		  			"<div class='gallery-item'>" +
		  			"<a href='"+ locations[index].photo +"'>" +
		  			"<img src='"+ locations[index].photo +"' style='overflow:visible;'/>" + 
		  			"</a>" +
		  			"</div>");}
		},
		error: function(){
			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}
