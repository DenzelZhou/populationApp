(function($, doc) {
	$.init();
	$.plusReady(function() {
		
	});
}(mui, document));

function submit(){
	var data={
		area:"1",
		street:"2",
		community:"3",
		building:"4",
		unit:"5"
	};
	mui.openWindow({
		id: "userInfo",
		url: "userInfo.html",
		extras:{
			data
		},
	});
}