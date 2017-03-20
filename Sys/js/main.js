(function($, doc) {
	$.init();
	//设置用户信息获取
	/*var settings = app.getSettings();
	var account = doc.getElementById('account');
	//
	window.addEventListener('show', function() {
		var state = app.getState();
		account.innerText = state.account;
	}, false);*/
	$.plusReady(function() {
		var settingPage = $.preload({
			"id": 'setting',
			"url": 'setting.html'
		});
		//设置
		var settingButton = doc.getElementById('setting');
		var userButton = doc.getElementById('user');
		var enterpriseButton = doc.getElementById('enterprise');
		//settingButton.style.display = settings.autoLogin ? 'block' : 'none';
		settingButton.addEventListener('tap', function(event) {
			$.openWindow({
				id: 'setting',
				show: {
					aniShow: 'pop-in'
				},
				styles: {
					popGesture: 'hide'
				},
				waiting: {
					autoShow: false
				}
			});
		});
		//人口调查
		userButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id:"user_index",
				url:"../../User/html/user_index.html",
			});
		});
		//企业调查
		enterpriseButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id:"enterprise_index",
				url:"../../Enterprise/html/enterprise_index.html",
			});
		});
		//--
		$.oldBack = mui.back;
		var backButtonPress = 0;
		$.back = function(event) {
			backButtonPress++;
			if (backButtonPress > 1) {
				plus.runtime.quit();
			} else {
				plus.nativeUI.toast('再按一次退出应用');
			}
			setTimeout(function() {
				backButtonPress = 0;
			}, 1000);
			return false;
		};
		
		
	});
}(mui, document));