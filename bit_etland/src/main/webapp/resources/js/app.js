var app = app || {};
app = (()=>{
	let init=x=>{
		app.$.init(x);
	};
	let onCreate=()=>{
		
		setContentView();
	};
	let setContentView=()=>{
		alert('when 전: '+$.js());
		$.when(
			$.getScript($.js()+'/component/compo.js'),
			$.getScript($.js()+'/customer/cust.js'),
			$.getScript($.js()+'/employee/emp.js')
		).done(()=>{
			cust.permission.login();
		});
	};
	return {init: init,
		onCreate: onCreate};
})();

app.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				alert('app.$.init 세션값은 : '+sessionStorage.getItem('js'));
				app.onCreate();
			})
		}
	};





