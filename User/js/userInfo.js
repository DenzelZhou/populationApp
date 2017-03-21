(function($, doc) {
	$.init();
	
	$.plusReady(function() {
		data=plus.webview.currentWebview().data;
		alert(data.area+data.street+data.community+data.building+data.unit);
	});
}(mui, document));

function submit(){
	mui.openWindow({
		id: "houseInfo",
		url: "houseInfo.html",
		extras:{
		},
	});
}