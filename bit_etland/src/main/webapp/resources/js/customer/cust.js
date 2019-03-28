var cust = cust || {}
cust = (()=>{
		let init =()=>{
			onCreate();
		};
		let onCreate =()=>{
			setContentView();
		};
		let setContentView =()=>{
		$.getScript($.js()+'/component/compo.js'),()=>{
			cust_mypage	
		}
	};
	return{init : init};
})();