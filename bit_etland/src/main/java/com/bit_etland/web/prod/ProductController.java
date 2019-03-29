/*package com.bit_etland.web.prod;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;

@RestController
public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Map<String, Object> map;
	@Autowired PrintService ps ;
	@Autowired ProductMapper proMap;
	@Autowired Users<?> user;
	@Autowired Product pro;
	
	@PostMapping("/phone")
	public Map<?, ?> insert(
							@PathVariable String user,
							@RequestBody Product param){
		logger.info("=======insert 진입 ======");
		IConsumer i = (Object o)-> proMap.insertProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;	
	}
	@GetMapping("/phone/{id}")
	public Product select(	
						@PathVariable String userId,
						@RequestBody Product param) {
		logger.info("======= login 진입 ======");
		IFunction i = (Object o)-> proMap.selectProduct(param);
		return (Product)i.apply(param);
	}
	@PutMapping("/phone/{id}")
	public Map<?,?> update(@PathVariable String userid,
							@RequestBody Product param){
		logger.info("======= 수정 진입 ======");
		IConsumer i = (Object o)-> proMap.updateproduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
		}
	@DeleteMapping("/phone/{id}")
	public Map<?, ?> delete(@PathVariable String userid,
						@RequestBody Product param){
		logger.info("======= 삭제 진입 ======");
		IConsumer i = (Object o)-> proMap.deleteproduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;	
		
	}
}
*/