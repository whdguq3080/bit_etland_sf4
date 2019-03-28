package com.bit_etland.web.emp;
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

@RestController
public class EmployeeController {
private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired Employee emp;
	@Autowired PrintService ps ;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String,Object> map;
	
	
	@PostMapping("/emp/{userid}")
	public Employee access(
							@PathVariable String userid,
							@RequestBody Employee param) {
			logger.info("======= login 진입 ======");
			IFunction i = (Object o)-> empMap.selectEmployee(param);
			return (Employee)i.apply(param);
			}
	/*@SuppressWarnings("unchecked")
	@GetMapping("/{user}/list")
	public List<Employee> list(
							@PathVariable String user,					
							@RequestBody Map<?,?> param) {
		logger.info("=======list 진입 ======");
		IFunction i = (Object o)-> empMap.selectEmployees(param);
		List<Employee> ls = (List<Employee>) i.apply(param);
		ps.accept(ls);
		return ls;
	}*/
	@PostMapping("/emp")
	public Map<?,?> join(

				@PathVariable String user,				
				@RequestBody Employee param) {
		logger.info("=======등록 진입 ======");
		IConsumer i = (Object o)-> empMap.insertEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
		}
	
	@PutMapping("/emp/{userid}")
	public Map<?,?> update(
							@PathVariable String userid,
							@RequestBody Employee param) {
			logger.info("======= 수정 진입 ======");
			IConsumer i = (Object o)-> empMap.updateEmployee(param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
			}
	@DeleteMapping("/emp/{userid}")
	public Map<?,?> delete(
			@PathVariable String userid,
			@RequestBody Employee param) {
			logger.info("======= 삭제 진입 ======");
			IConsumer i = (Object o)-> empMap.deleteEmployee(param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
			}
}
