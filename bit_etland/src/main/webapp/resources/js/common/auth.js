var auth = auth || {};
auth = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';

		onCreate();
	};
	let onCreate =()=>{
          setContentView();
    };
     
	let setContentView =()=>{
		$.getScript(compojs)
		.done(()=>{
			 // 오른쪽 디폴트 화면으로 로그인폼
			$(r_cnt).empty();
			$(compo.cust_login_form())
			.appendTo(r_cnt);
			login(); // 디폴트화면 기능
            // 왼쪽 네비게이션
		$(l_cnt+' ul.nav').empty();
		let arr = 	[{name: 'login' ,val:'로그인'},
					{name: 'join',val:'회원가입'},
					{name: 'access',val:'사원접속'},
					{name: 'register',val:'사원등록'}
					];
		$.each(arr, (i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>')
			.attr('name', j.name)
			.appendTo(l_cnt+' ul.nav')
			.click(function(){
			let that = $(this).attr('name');
			switch(that){
			case 'login':
				$(r_cnt).empty();
				$(compo.cust_login_form())
				.appendTo(r_cnt);
				login();  // 클릭이벤트 처리
				break;
			case 'join':
				$(r_cnt).empty();
				$(compo.cust_join_form())
				.appendTo(r_cnt);
				break;
			case 'register':
				$(r_cnt).empty();
				$(compo.emp_register_form())
				.appendTo(r_cnt);
				break;
			case 'access':
				$(r_cnt).empty();
				$(compo.emp_access_form())
				.appendTo(r_cnt);
				break;
				}
			});
		});	
	})
	.fail(()=>{
      alert('component/compo.js 를 찾지  못했습니다.');
     });
};
let login =()=>{
	$('form button[type=submit]').click(()=>{
		let data ={customerID:$('form input[name=uname]').val(),
				password:$('form input[name=psw]').val()};
		alert('ctx:'+data.customerID);
		alert('ctx:'+data.password);
		$.ajax({
            url : _+'/cust/login/',
            type : 'post',
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : "application/json",
            success : d=>{
            	if(d.customerID!==''){
            		 alert('로그인 성공 2 '+d.customerName);
					 $(r_cnt).empty();
					 $(r_cnt).html(compo.cust_mypage());
            	}else{
            		alert('로그인 실패');
            	}
            },
            error : e=>{
                alert('실패');
            }
		 });
	})
};
	let join =()=>{};
	let register =()=>{};
	let access =()=>{};
	return {init : init};
})();	