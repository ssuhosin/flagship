var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
// 장비를 쓰기위한 준비를 시키는 것(각장비별로 초기화 시킬 것을 초기화함)
document.addEventListener("deviceready",onDeviceReady,false);//폰갭이 새로 등록한 이벤트

// device APIs are available
//
function onDeviceReady() {
	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
// 
function onPhotoDataSuccess(imageData) {
	// Uncomment to view the base64-encoded image data
	// console.log(imageData);

	// Get image handle
	//
//	var smallImage = document.getElementById('smallImage');

	// Unhide image elements
	//
//	smallImage.style.display = 'block';

	// Show the captured photo
	// The in-line CSS rules are used to resize the image
	//
//	smallImage.src = "data:image/jpeg;base64," + imageData; //경로대신 이미지데이터가 바로 올 수 있다.(찍은 사진은 임시저장하지 않고 바로 가져옴)
//	smallImage.src = imageData;
	if(locationNo != null) {
		addPhoto(locationNo, "" + imageData);
	}
//	alert(imageData);
//	console.log(imageData);
//	alert(smallImage.src);
//	alert(smallImage.src);
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
	// Uncomment to view the image file URI
	// console.log(imageURI);

	// Get image handle
	//
	var largeImage = document.getElementById('largeImage');

	// Unhide image elements
	//
	largeImage.style.display = 'block';

	// Show the captured photo
	// The in-line CSS rules are used to resize the image
	//
	largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
	console.log("No : " + locationNo);
	// Take picture using device camera and retrieve image as base64-encoded string
//	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
//		sourceType : Camera.PictureSourceType.CAMERA,
//		destinationType: destinationType.FILE_URI });
}

// A button will call this function
//
function capturePhotoEdit() {
	// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
		destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {//1.포토라이브러리에서 사긴을 가져오냐 2. 앨범에서 가져오냐
	// Retrieve image file location from specified source
	navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,//품질 
		destinationType: destinationType.FILE_URI, //사진경로
		sourceType: source });//가져오는 장소
}

// Called if something bad happens.
//
function onFail(message) {
	alert('Failed because: ' + message);
}

function addPhoto(locationNo, path) {
	flagship.ajax('../photo/ajax/add.do', {
		method: 'POST',
		data: {
			lno: locationNo,
			path: path
    },
		success: function(){
		},
		error: function(){
			//alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
	}});
}