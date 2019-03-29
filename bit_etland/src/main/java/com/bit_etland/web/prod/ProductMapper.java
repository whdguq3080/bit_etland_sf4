package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.bit_etland.web.cust.Customer;

@Component
public interface ProductMapper {
		public void insertProduct(Product pro);
		public Product selectProduct(Product pro);
		public List<Product> selectProducts(Map<?,?> map);
		public List<Product> selectProductlist(Map<?,?> map); 
		public int countProduct(Object o);
		public boolean existsProduct(String searchword);
		
		public Product updateproduct(Product pro);
		public void deleteproduct(Product pro);
	}

