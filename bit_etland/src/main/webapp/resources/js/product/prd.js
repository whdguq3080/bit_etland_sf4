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
		$('#right_content').empty();
		$(compo.prod_post())
		.appendTo('#right_content');
		$('#prd_post_btn').click(e=>{
			e.preventDefault();
			
			let freebies =[];
			$(".checks:checked").each(function(i){
				freebies.push($(this).val());
			});
			let pname = $('#product_name').val();
			let price = $('#price').val();
			let comment = $('#comment').val();
			let unit = $('#unit').val();
			if($.fn.nullChecker([pname,price,unit])){
				alert('빈칸을 입력해주세요');
			}else{
				alert('성공 널이 아닙니다');
			}
				
			let data = {categoryID:$('#category_id option:selected').val(),
						productName:$('#product_name').val(),
						price:$('price').val(),
						unit:$('#unit').val(),
						supplierID:$('#supplier_id').val(),
						color:$('input[name=color]:checked').val(),
						freebies:freebies,
						comment:$('#comment').text()}; 
			$.ajax({
				url:$.ctx()+'/phones/{userId}',
				type:'post',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('성공');
					post();
				},
				error:e=>{
					alert('에러');
				}
			})
		})
		$('#img_upload_btn').click(function(){
			let ok= (this.files[0].name.match('/jpg|gif|png|jpeg/i')) ? true : false;
			if(ok){
				/*let fd = new FormData();
				fd.append('file', this.files[0])*/
				$('#img_upload_frm').attr('action',$.ctx()+'/phones/files');
				$.ajax({
					url : $('#img_upload_frm').attr('action'),
					dataType : 'text',
					enctype :"multipart/form-data",
					beforeSubmit: function(){
						alert('로딩');
					},
					success : d=>{
						alert('파일업로드 성공');
					}
				}).submit();
			}else{
				alert('gif, png, jpg, jpeg 파일만 업로드 할 수 있습니다.')
			}
		});
	};
	let get=x=>{
		$.getJSON($.ctx()+'/phones/page/'+x,d=>{
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
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	return {init:init ,get: get,post:post};
})();	