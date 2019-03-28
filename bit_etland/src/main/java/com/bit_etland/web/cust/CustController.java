package com.bit_etland.web.cust;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.EmployeeMapper;

@RestController
@RequestMapping("/users")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	@Autowired Customer cust;
	@Autowired PrintService ps ;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	
	
	@PostMapping("/cust/{userId}")
	public Customer login(
							@PathVariable String userId,
							@RequestBody Customer param) {
			logger.info("======= login 진입 ======");
			IFunction i = (Object o)-> custMap.selectCustomer(param);
			return (Customer)i.apply(param);
			}
	@SuppressWarnings("unchecked")
	@GetMapping("{user}/list")
	public List<Customer> list(
							@PathVariable String page,					
							@RequestBody Map<?,?> param) {
		logger.info("=======list 진입 ======");
		IFunction i = (Object o)-> custMap.selectCustomers(param);
		List<Customer> ls = (List<Customer>) i.apply(param);
		ps.accept(ls);
		return ls;
	}
	@PostMapping("/cust")
	public Map<?,?> join(@RequestBody Customer param) {
		logger.info("=======join 진입 ======");
		IConsumer i = (Object o)-> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
		}
	
	@PutMapping("/cust/{userid}")
	public Map<?,?> update(@PathVariable String userid,
							@RequestBody Customer param) {
			logger.info("======= 수정 진입 ======");
			IConsumer i = (Object o)-> custMap.updateCustomer(param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
			}
	@DeleteMapping("/cust/{userid}")
	public Map<?,?> delete(
			@PathVariable String userid,
			@RequestBody Customer param) {
			logger.info("======= 삭제 진입 ======");
			IConsumer i = (Object o)-> custMap.deleteCustomer(param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
			}
}
