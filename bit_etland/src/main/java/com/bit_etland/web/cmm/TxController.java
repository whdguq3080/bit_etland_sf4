package com.bit_etland.web.cmm;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cust.Customer;
import com.bit_etland.web.cust.CustomerMapper;
import com.bit_etland.web.emp.EmployeeMapper;
import com.bit_etland.web.prod.Product;

@RestController
@Transactional
public class TxController {
	
	@Autowired Customer cust;
	@Autowired PrintService ps ;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	
	private static final Logger logger = LoggerFactory.getLogger(TxController.class);
	
}
