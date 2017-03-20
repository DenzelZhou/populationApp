(function($, doc) {
	$.init();
	
	$.plusReady(function() {
		send_province=plus.webview.currentWebview().send_province;
		send_city=plus.webview.currentWebview().send_city;
		send_area=plus.webview.currentWebview().send_area;
		send_addr=plus.webview.currentWebview().send_addr
		send_contacter=plus.webview.currentWebview().send_contacter;
		send_phone=plus.webview.currentWebview().send_phone;
		pick_province=plus.webview.currentWebview().pick_province;
		pick_city=plus.webview.currentWebview().pick_city;
		pick_area=plus.webview.currentWebview().pick_area;
		pick_addr=plus.webview.currentWebview().pick_addr;
		pick_contacter=plus.webview.currentWebview().pick_contacter;
		pick_phone=plus.webview.currentWebview().pick_phone;
		send_time=plus.webview.currentWebview().send_time;
		target=plus.webview.currentWebview().target;
		//城际:1;同城:2
		order_scope=(send_city==pick_city?'2':'1');
	});
}(mui, document));

function submit(){
	mui.openWindow({
		id: "houseInfo",
		url: "houseInfo.html",
		extras:{
			area:"",
			street:"",
			community:"",
			building:"",
			unit:""
		},
	});
}