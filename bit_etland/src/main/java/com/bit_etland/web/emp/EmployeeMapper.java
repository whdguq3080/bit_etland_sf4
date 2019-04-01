package com.bit_etland.web.emp;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMapper {
	public void insertEmployee(Employee emp);
	public List<Employee> selectEmployeesList(Map<?,?> map); 
	public List<Employee> selectEmployees(Map<?,?> map);
	public Employee selectEmployee(Employee emp);
	public Employee findOneEmployee(Employee emp);
	public int countEmployees();
	public boolean existsEmployee(Employee emp);
	public Employee updateEmployee(Employee emp);
	public void deleteEmployee(Employee emp);
}