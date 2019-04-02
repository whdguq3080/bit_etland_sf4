var auth = auth || {};
auth = (()=>{
	let _,js,compojs,r_cnt,l_cnt,but;
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		custjs = js+'/customer/cust.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		but = 'form button[type=submit]';
		onCreate();
	};
	let onCreate =()=>{
          setContentView();
    };
	let setContentView =()=>{
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.cust_login_form());
			// 오른쪽 디폴트 화면으로 로그인폼
			$(but).click(e=>{
			e.preventDefault(); // 버블링을 중단시키는 역할
			login(); // 디폴트화면 기능
			});
			// 왼쪽 네비게이션
			$(l_cnt+' ul.nav').empty();
		let arr = [{name: 'login' ,val:'로그인'},
					{name: 'join',val:'회원가입'},
					{name: 'access',val:'사원접속'},
					{name: 'register',val:'사원등록'}
					];
		$.each(arr, (i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>')
			.attr('name', j.name)
			.attr('id', j.id)
			.appendTo(l_cnt+' ul.nav')
			.click(function(){
				let that = $(this).attr('name');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				switch(that){
				case 'login':
				alert('로그인 접속');
					$(r_cnt).empty();
					$(compo.cust_login_form())
					.appendTo(r_cnt);
					$('form button[type=submit]').click(e=>{
					e.preventDefault();
					login();
				});
				break;
				case 'join':
					alert('회원가입 접속');
					$(r_cnt).empty();
					$(compo.cust_join_form())
					.appendTo(r_cnt);
					$('form button[type=submit]').click(e=>{
					e.preventDefault();
					join();
				});
				break;
				case 'access':
					alert('사원 접속');
					$(r_cnt).empty();
					$(compo.emp_access_form())
					.appendTo(r_cnt);
					$('#access_btn').click(e=>{
						e.preventDefault();
						alert('사원 접속 클릭');
						access();
					});
					break;
				case 'register':
					alert('사원등록 접속');
					$(r_cnt).empty();
					$(compo.emp_register_form())
					.appendTo(r_cnt);
					break;
				}
			});
		});	
	$('#login').addClass('active');	
	})
	.fail(()=>{
		alert('component/compo.js 를 찾지  못했습니다.');
     });
};
let login =()=>{
		let data ={customerID:$('form input[name=uname]').val(),
				password:$('form input[name=psw]').val()};
		$.ajax({
            url : _+'/cust/{userId}'+data.customerID,
            type : 'post',
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : "application/json",
            success : d=>{
            	if(d.customerID!==''){
            		alert('로그인');	
            		cust.init(d);
            	}else{
            	}
            },
            error : e=>{
                alert('실패');
            }
	 });
};
let join =()=>{
		let data ={customerID:$('form input[name=customerID]').val(),
				customerName:$('form input[name=customerName]').val(),
				password:$('form input[name=password]').val(),
				ssn:$('form input[name=ssn]').val(),
				phone:$('form input[name=phone]').val(),
				city:$('form input[name=city]').val(),
				address:$('form input[name=address]').val(),
				postalCode:$('form input[name=postalCode]').val()};
		$.ajax({
            url : _+'/users/cust',
            type : 'post',
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : "application/json",
            success : d=>{
            	alert('회원가입 성공  '+d.msg);
            	if(d.msg==='SUCCESS'){
					 $(r_cnt).html(compo.cust_login_form());
					 $('form button[type=submit]').click(e=>{
							e.preventDefault();
							login(); 
					});
            	}else{
            		alert('회원가입 실패');
            		$(r_cnt).html(compo.cust_join_form());
            		join();
            	}
            },
            error : e=>{
                alert('실패');
            }
	 });
};
let register =()=>{
		let data ={employeesID:$('form input[name=employeesID]').val(),
				name:$('form input[name=name]').val(),
				manager:$('form input[name=manager]').val(),
				birthDate:$('form input[name=birthDate]').val(),
				photo:$('form input[name=photo]').val(),
				notes:$('form input[name=notes]').val()};
		$.ajax({
            url : _+'/users/emp',
            type : 'post',
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : "application/json",
            success : d=>{
            	alert('회원가입 성공  '+d.msg);
            	if(d.msg ==='success'){
            		
            		$("#right_content").html(compo.cust_login_form());
					 $('form button[type=submit]').click(e=>{
							e.preventDefault();
							login();
					});
            	}else{
            		alert('업데이트 실패');
            		$("#right_content").html(compo.cust_join_form());
            		 join();
            	}
            }, 
            error : e=>{
                alert('실패');
            }
		 });
	};
let access =()=>{
		let ok = confirm('사원 입니까?');
		if(ok){
			let emp_no = prompt('사원번호 입력하세요');
			$.getJSON(_+'/emp', d=>{
	            	if(emp_no===d.employeesID){
	            		alert('사원 인증');
	            		//이름 입력창을 그린다
	            		$(r_cnt).empty();
	    				$(r_cnt).html(compo.emp_access_form());
	            		$('<label for="name"><b>name</b></label>')
	            		+ $('<input type="text" placeholder="Enter name" id="name" name="name" value="김경민">')
	            		.appendTo('form div#emp')
	            		$('form button[type=submit]')
	            		.click(e=>{
							e.preventDefault();
						if($('#name').val() === d.name){//고객 명단
	            		cust.list();
	            		emp.init();
	            		}else{
							alert('사원번호가 일치하지 않습니다.');
	            		}
	            		});	
	            	}else{
						alert('사원번호가 일치하지 않습니다.');
	            				//사원번호가 일치하지 않습니다.
	            	}
				});
	    }else{
	    	 alert('사원 전용 페이지 입니다..');
	    	 // 사원 전용 페이지 입니다.
	    	 // 되돌아가기 버튼이 보인다.
	    }
	};

	return {init : init};
})();	