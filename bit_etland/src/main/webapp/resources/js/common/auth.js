var auth = auth || {};
auth.permission = (()=>{
/*	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		
	};*/
	let login =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			$('form button[type=submit]')
			.click(()=>{
				let data ={customerID:$('form input[name=uname]').val(),
						password:$('form input[name=psw]').val()};
				alert('ctx:'+data.customerID);
				alert('ctx:'+data.password);
				$.ajax({
                    url : $.ctx()+'/cust/login',
                    type : 'post',
                    data : JSON.stringify(data),
                    dataType: 'json',
                    contentType : "application/json",
                    success : d=>{
                        alert('성공');
                    },
                    error : e=>{
                        alert('실패');
                    }
				});
			});
		$('#left_content ul.nav').empty();
		let arr = 	[{name: 'login' ,val:'로그인'},
					{name: 'join',val:'회원가입'},
					{name: 'access',val:'사원접속'},
					{name: 'register',val:'사원등록'}
					];
		$.each(arr, (i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>')
			.attr('name', j.name)
			.appendTo('#left_content ul.nav')
			.click(function(){
				let that = $(this).attr('name');
			switch(that){
			case 'login':
				$('#right_content').empty();
				$(compo.cust_login_form())
				.appendTo('#right_content');
			break;
			case 'join':
				$('#right_content').empty();
				$(compo.cust_join_form())
				.appendTo('#right_content');
			break;
			case 'access':
				$('#right_content').empty();
				$(compo.emp_access_form())
				.appendTo('#right_content');
			break;
			case 'register':
				$('#right_content').empty();
				$(compo.emp_register_form())
				.appendTo('#right_content');
			break;
				};
			});
		});	
	});	
};
	let join =()=>{};
	let mypage =()=>{};
	return {
			login : login,
			join : join,
			mypage : mypage
		};
})();	