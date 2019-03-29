var cust = cust || {}
cust = (()=>{
	let init =()=>{
			_ = $.ctx();
			js = $.js();
			compojs = js+'/component/compo.js';
			custjs = js+'/customer/cust.js';
			empjs = js+'/employee/emp.js';
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
		$(r_cnt).empty();
		$(r_cnt).html(compo.cust_mypage());
		
		$(l_cnt+' ul.nav').empty();
		let arr = [
				{name : 'mypage', val : '마이페이지'},
				{name: 'change' ,val:'정보수정'},
				{name: 'withDrawal',val:'회원탈퇴'},
				{name: 'shoppingMall',val:'쇼핑몰'},
				{name: 'details',val:'구매내역'},
				{name: 'basket',val:'장바구니'}];
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
			case 'mypage':
			alert('마이페이지 접속');
				$(r_cnt).empty();
				$('form button[type=submit]').click(e=>{
					$(r_cnt).html(compo.cust_mypage());
				});
			break;
			case 'change':
				alert('정보수정 접속');
				$(r_cnt).empty();
				$(compo.cust_login_form())
				.appendTo(r_cnt);
				$('form button[type=submit]').click(e=>{
					e.preventDefault();
					login(); // 디폴트화면 기능
				});
				break;
			case 'withDrawal':
				alert('회원탈퇴 접속');
				$(r_cnt).empty();
				$(compo.cust_join_form())
				.appendTo(r_cnt);
				$('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
				});
				break;
			case 'shoppingMall':
				$>getScript(empjs,()=>{}).fail(()=>{
				})();
				alert('쇼핑몰 접속');
				$(r_cnt).empty();
				$(compo.carousel())
				.appendTo(r_cnt);
				$('form button[type=submit]').click(e=>{
				e.preventDefault();
				join();
				});
				break;
			case 'details':
				alert('구매내역 접속');
				$(r_cnt).empty();
				$(compo.emp_access_form())
				.appendTo(r_cnt);
				break;
			case 'details':
				alert('장바구니 접속');
				$(r_cnt).empty();
				$(compo.emp_access_form())
				.appendTo(r_cnt);
				break;
				}
			});
		});	
		$(this).addClass('active');
	})
};

	return {init : init};
})();	