function getLocation(no){ 
	flagship.ajax('../location/ajax/list.do?no='+no, {
		method: 'GET',
		success: function(locations){
			
			$('#locationsID').append("<div id='accordianLoc' data-role='collapsible-set' data-theme='a' data-content-theme='a'></div>");
		  for(var index in locations) {
		  	$('#accordianLoc').append(
		  			"<div data-role='collapsible' style='margin: 10px'>" +
		        	"<h3>" + locations[index].title + "</h3>" +
		        	"<p>" + locations[index].description +"</p>" +
		        "</div>");	
		  }
		  $('#accordianLoc').collapsibleset().trigger('create');
		},
		error: function(){
			alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}