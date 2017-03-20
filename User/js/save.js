(function($, doc) {
	$.init();
	$.plusReady(function() {
		
	});
}(mui, document));

function submit(){
	mui.openWindow({
		id: "userInfo",
		url: "userInfo.html",
		extras:{
			area:"",
			street:"",
			community:"",
			building:"",
			unit:""
		},
	});
}