var prd = prd || {}
prd= (()=>{
	let init=()=>{
	r_cnt = '#right_content';	
	onCreate();
	};
	let onCreate=()=>{
		setContentview();
	};
	let setContentview=()=>{
	$(r_cnt).html(compo.carousel());
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