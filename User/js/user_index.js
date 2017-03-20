(function($, doc) {
	$.init();
	$.plusReady(function() {
		//设置
		var saveButton = doc.getElementById('save');
		var queryButton = doc.getElementById('query');
		var updateButton = doc.getElementById('update');
		saveButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id:"save",
				url:"save.html",
			});
		});
		queryButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id:"update",
				url:"update.html",
			});
		});
		updateButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id:"query",
				url:"query.html",
			});
		});
		//退后
		/*$.oldBack = mui.back;
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
		};*/
	});
}(mui, document));