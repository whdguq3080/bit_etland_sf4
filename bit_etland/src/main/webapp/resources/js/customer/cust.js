var cust = cust || {}
cust = (()=>{
	let _,js,compojs,custjs,empjs,r_cnt,l_cnt,but
	let init =(d)=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/component/compo.js';
		custjs = js+'/customer/cust.js';
		empjs = js+'/employee/emp.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		but = 'form button[type=submit]';
		data = d;
		onCreate(d);
		};
		let onCreate =(d)=>{
			setContentView(d);
		};
		let setContentView =(d)=>{
		mypage(d);
		$.getScript(compojs,()=>{
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
		.appendTo(l_cnt+' ul.nav')
		.click(function(){
			let that = $(this).attr('name');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			switch(that){
			case 'mypage':
			alert('마이페이지 접속');
				$(r_cnt).empty();
				mypage(d);
			break;
			case 'change':
				alert('정보수정 접속');
				$(r_cnt).empty();
				$(compo.cust_update_form(d))
				.appendTo(r_cnt);
				$('form button[type=submit]').click(e=>{
					e.preventDefault();
					/*login(); // 디폴트화면 기능*/	
					/*$(r_cnt).html(compo.cust_mypage(d));
					 $('#update').click(e=>{
						 e.preventDefault();/* 
						 $(r_cnt).html(compo.cust_update_form(d));
						 $('#myupdate').click(e=>{ */
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
				$(r_cnt).empty();
				prd.init();
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
let mypage = d=>{
	$(r_cnt).html(compo.cust_mypage(d));
	};

let list = ()=>{
	$.getJSON($.ctx()+'/cust/page/1',d=>{
		$('#right_content').empty();
		$(compo.cust_list_form()).appendTo('#right_content');
	$.each(d.ls, (i,j)=>{
		$('<tr><td>'+j.rownum+'</td>'
		+'  <td>'+j.customerID+'</td>'
		+'  <td>'+j.customerName+'</td>'
		+'  <td>'+j.ssn+'</td>'
		+'  <td>'+j.phone+'</td>'
		+'  <td>'+j.address+'</td>'
		+'  <td>'+j.postalCode+'</td>'
		+'  </tr>')
		.appendTo('#customers');
	});
	html = '<div class="pagination">';
	if(d.pxy.existPrev){
		html +='<a href="#" page_num="d.pxy.prevBlock">&laquo;</a>'
	}
	for(let i=d.pxy.startPage; i<=d.pxy.endPage; i++){
		if(d.pxy.pageNum == i){
			html +=	'<a href="#" class ="page active">'+i+'</a>'
		}else{
			html += '<a href="#" class ="page">'+i+'</a>'	
		}
	}
	if(d.pxy.existnext){
		html += '<a href="#" page_num="d.pxy.nextBlock">&raquo;</a>'
	}
	html += '</div>';
	alert(html);
	$(html).appendTo('#pagination');
	
/*	 $('.page').click(function(){
	 		alert('--클릭한 페이지--'+$(this).text());
	 location.assign('${ctx}/customer.do?cmd=cust_list&page=list&page_num='+$(this).text());
	 });*/
	});
};
/*<div style="height: 50px"></div>    
 	<c:if test="${pagination.existNext}">
	  <a href='${ctx}/category.do?cmd=category_list&page=list&page_num=${pagination.nextBlock}'>&raquo;</a>
 	</c:if>
  </div>
</div>
</div>*/
return {init : init, list:list};
})();	