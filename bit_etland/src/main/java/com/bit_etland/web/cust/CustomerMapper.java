package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface CustomerMapper {
	public void insertCustomer(Object o);
	public Customer selectCustomer(Customer cust);
	public List<Customer> selectCustomersList();
	public List<Customer> selectCustomers(Proxy pxy);
	public int countCustomer();
	public Customer updateCustomer(Customer cust);
	public Map<String, Object> selectProfile(Object o);
	public void deleteCustomer(Customer cust);
	
	public Map<String, Object> selectPhone(Object o);
}