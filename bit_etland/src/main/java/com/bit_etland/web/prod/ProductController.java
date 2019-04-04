package com.bit_etland.web.prod;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cat.Category;
import com.bit_etland.web.cat.CategoryMapper;
import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.supp.Supplier;
import com.bit_etland.web.supp.SupplierMapper;

@RestController
public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Map<String, Object> map;
	@Autowired PrintService ps ;
	@Autowired Users<?> user;
	@Autowired Product prd;
	@Autowired Proxy pxy;
	@Autowired ProductMapper proMap;
	@Autowired CategoryMapper catMap;
	@Autowired SupplierMapper supMap;
	@Autowired Category cat;
	@Autowired Supplier sup;
	
	@Transactional
	@PostMapping("/phones")
	public Map<?, ?> regist(
						@RequestBody Product param){
		logger.info("=======insert 진입 ======");
		List<String> ls = param.getFreebies();
		ps.accept("리스트:: "+ls);
		ps.accept("리스트:: "+param.toString());
		cat.setCategoryName(param.getCategoryID());
		sup.setSupplierName(param.getSupplierID());
		IFunction f=  s -> catMap.txCategory((String)s);
		IFunction f2=  s -> supMap.txSupplier((String)s);
		String cateID = (String) f.apply(param.getCategoryID());//name
		String suppID = (String) f2.apply(param.getSupplierID());//name
		param.setCategoryID(cateID);
		param.setSupplierID(suppID);
		/*IConsumer i = o -> proMap.insertProduct((Product)o);
		i.accept(param);*/
		map.clear();
		map.put("msg", "SUCCESS");
		return map;	
	}
	@SuppressWarnings("unchecked")
	@GetMapping("/phones/search/{page}/{search}")
	public Map<?,?> select(	
			@PathVariable("page") String page,	
			@PathVariable("search") String search) {
		logger.info("=======상품 리스트 진입 ======");
		map.clear();
		map.put("pageNum", page);
		map.put("pageSize", "5");
		map.put("blockSize", "5");
		String sa = "%"+search+"%";
		IFunction c = (Object o)-> proMap.countProducts(sa);
		map.put("totalCount", c.apply(sa));
		map.clear();
		IFunction s = (Object o)-> proMap.selectProductlists(search);
		List<Product> list = (List<Product>) s.apply(search);
		System.out.println("상품"+list.toString());
		map.put("srch", list);
		map.put("pxy", pxy);
		return map;
	}
	@PutMapping("/phones/{id}")
	public Map<?,?> update(@PathVariable String userid,
							@RequestBody Product param){
		logger.info("======= 수정 진입 ======");
		IConsumer i = (Object o)-> proMap.updateproduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
		}
	@DeleteMapping("/phones/{id}")
	public Map<?, ?> delete(@PathVariable String userid,
						@RequestBody Product param){
		logger.info("======= 삭제 진입 ======");
		IConsumer i = (Object o)-> proMap.deleteproduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;	
		
	}
	@GetMapping("/phones/page/{page}")
	public Map<?,?> list(@PathVariable String page) {
		logger.info("=======list 진입 ======");
		//page_num.page_size,block_Size,totalCount
		map.clear();
		map.put("pageNum", page);
		map.put("pageSize", "5");
		map.put("blockSize", "5");
		ISupplier c = ()-> proMap.countProduct();
		map.put("totalCount", c.get());
		pxy.carryOut(map);
		IFunction i = (Object o)-> proMap.selectProductlist(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}
}
