(function($, doc) {
	$.init();
	$.plusReady(function() {
		
	});
	//选择区
	$.ready(function() {
		var areaPicker = new $.PopPicker();
		areaPicker.setData([{
			text: '海淀区'
		}, {						
			text: '朝阳区'
		}, {
			text: '丰台区'
		}, {
			text: '西城区'
		},{
			text: '昌平区'
		}]);
		var showAreaPickerButton = doc.getElementById('area');
		showAreaPickerButton.addEventListener('tap', function(event) {
			areaPicker.show(function(items) {
				showAreaPickerButton.value = (items[0] || {}).text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
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
	
	//ajax调用
	var jsonData = {
			data: {
				"password": "123"
			}
		};
	var result = publicAjax("login/seach.do", jsonData);
	if(result == "error")
		alert('通讯错误');
	else 
		var resultDate = result;
}




