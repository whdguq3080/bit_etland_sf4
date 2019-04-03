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
	let get=x=>{
		$.getJSON($.ctx()+'/prd/page/'+x,d=>{
			$('#right_content').empty();
			$('<div class="grid-item" id="content_1">'
			+'<h2>고객리스트</h2>'
			+'</div>'
			+'<div class="grid-item" id="content_2">'
			+'<table class="table table-bordered" id="tab"><tr>'
			+'    <th>No.</th>'
			+'    <th>이름</th>'
			+'    <th>공급업체</th>'
			+'    <th>카테고리</th>'
			+'    <th>유닛</th>'
			+'    <th>가격</th>'
			+'  </tr>'
			+'</table>')
			.appendTo('#right_content');
		$.each(d.ls, (i,j)=>{
			$('<tr><td>'+j.rownum+'</td>'
			+'  <td>'+j.productName+'</td>'
			+'  <td>'+j.supplierID+'</td>'
			+'  <td>'+j.categoryID+'</td>'
			+'  <td>'+j.unit+'</td>'
			+'  <td>'+j.price+'</td>'
			+'  </tr>')
			.appendTo('#tab');
		});
		$('<div style="height: 50px"></div>')
		.appendTo('#content_1');
		$('<div class="pagination"></div>').appendTo('#content_2');
		if(d.pxy.existPrev){
			$('<li><a>&laquo;</a></li>')
			.appendTo('.pagination')
			.click(function(){
				alert($(this).text());
				get(d.pxy.prevBlock);
			});
		}
		let i =0;
		for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
			if(d.pxy.pageNum == i){
				$('<li><a class="page active">'+i+'</a></li>')
				.attr('href',$.ctx()+'/prd/page/'+i)
				.appendTo('.pagination')
				.click(function(){
					alert($(this).text());
					get($(this).text());
				});
			}else{
				$('<li><a class="page">'+i+'</a></li>')
				.attr('href',$.ctx()+'/prd/page/'+i)
				.appendTo('.pagination')
				.click(function(){
					alert($(this).text());
					get($(this).text());
				});
			}
		}
		if(d.pxy.existnext){
			$('<li><a>&raquo;</a></li>')
			.appendTo('.pagination')
			.click(function(){
				alert($(this).text());
				get(d.pxy.nextBlock);
			});
			};
		});
		/*	html += '</div>';
			$(html).appendTo('#pagination');*/
		
	/*	 $('.page').click(function(){
		 		alert('--클릭한 페이지--'+$(this).text());
		 location.assign('${ctx}/customer.do?cmd=cust_list&page=list&page_num='+$(this).text());
		 });*/
	/*<div style="height: 50px"></div>    
	 	<c:if test="${pagination.existNext}">
		  <a href='${ctx}/category.do?cmd=category_list&page=list&page_num=${pagination.nextBlock}'>&raquo;</a>
	 	</c:if>
	  </div>
	</div>
	</div>*/
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	return {init:init ,get: get};
})();	