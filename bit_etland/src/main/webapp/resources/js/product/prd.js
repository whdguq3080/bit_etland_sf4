var prd = prd || {}
prd= (()=>{
	let init=x=>{
	r_cnt = '#right_content';	
	onCreate();
	};
	let onCreate=()=>{
		setContentview();
	};
	let setContentview=()=>{
	$(r_cnt).html(compo.carousel());
	$.when(
			$.js()+'/cmp/compo.js',
			$.js()+'/cmp/compo.js'
	)
	};
	let post=()=>{
		
	};
	let get=()=>{
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	return {init:init};
})();	