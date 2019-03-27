package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;


@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cust);
	public List<Customer> selectCustomers(Map<?,?> map);
	public List<Customer> selectCustomersList(Map<?,?> map);
	public int countCustomer(Object o);
	public void updateCustomer(Customer cust);
	public Map<String, Object> selectProfile(Object o);
	public void deleteCustomer(Customer cust);
	
	public Customer selectCustomer(Customer cust);
	public Map<String, Object> selectPhone(Object o);
}