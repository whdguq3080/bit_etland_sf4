package com.bit_etland.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cust.Customer;
import com.bit_etland.web.cust.CustomerMapper;
import com.bit_etland.web.emp.EmployeeMapper;
import com.bit_etland.web.prod.ProductMapper;

@RestController
@Transactional
public class TxController {
	
	private static final Logger logger = LoggerFactory.getLogger(TxController.class);
	@Autowired Customer cust;
	@Autowired PrintService ps ;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired ProductMapper prodMap;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	
	@GetMapping("/transaction/{page}/{search}")
	public Map<?,?> login(
			@PathVariable("page") String page,
			@PathVariable("search") String search) {
		
		System.out.println("TX 진입");
		String sa = "%"+search+"%";
		map.clear();
		map.put("pageNum", page);
		map.put("pageSize", "5");
		map.put("blockSize", "5");
		ISupplier ic = ()-> prodMap.countProducts(sa);
		map.put("totalCount", ic.get());
		
		map.put("search", search);
		pxy.carryOut(map);
		IFunction f = (Object o) -> prodMap.selectProductlists(pxy);
		List<?> ls = (List<?>) f.apply(pxy);
		
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		
		return map;
	}
}
