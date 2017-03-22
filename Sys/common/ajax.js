//公共ajax
function publicAjax(PrivateUrl, jsonData) {
			//设置全局beforeSend
		mui.ajaxSettings.beforeSend = function(xhr, setting) {
			//beforeSend演示,也可在$.ajax({beforeSend:function(){}})中设置单个Ajax的beforeSend
			console.log('beforeSend:::' + JSON.stringify(setting));
		};
		//设置全局complete
		mui.ajaxSettings.complete = function(xhr, status) {
			console.log('complete:::' + status);
		}
		mui.ajax("http://172.168.0.102:8080/examen_sys/" + PrivateUrl, {
			data: jsonData.data,
			dataType: 'json',
			type: 'post',
			timeout: 10000,
			async: false,
			success: function(data) {
				//转换为string字符串
				console.log(JSON.stringify(data));
				webServiceJson = data;
				
			},
			error: function(xhr, type, errorThrown) {
				webServiceJson = "error";
			}
		});
		return webServiceJson;
}

//+++++++++++++++++++++++++++++++第二种+++++++++++++++++++++++++++++++++++++
//调用
/*var JsonData={data:{"passw":guidstr}};
    powers.getwebservice("SetCory",JsonData,function(data){
         	mui.toast( "！"); 
    },function(err){
			mui.toast( "×！"); 
   });


//公共ajax
publicAjax: function(PrivateUrl, JsonData, successfn, errorfn) {
	mui.ajax(PublicUrl + PrivateUrl, {
		data: functionjson.data,
		dataType: 'json',
		type: 'post',
		timeout: 10000,
		async: false,
		success: successfn,
		error: errorfn
	});
}*/