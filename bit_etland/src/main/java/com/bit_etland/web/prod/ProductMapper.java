package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface ProductMapper {
		public void insertProduct(Product pro);
		public Product selectProduct(Product pro);
		public List<?> selectProducts(Map<?,?> map);
		public List<?> selectProductlists(Proxy pxy); 
		public List<?> selectProductlist(Proxy pxy); 
		public int countProduct();
		public int countProducts(String search);
		public boolean existsProduct(String searchword);
		
		public Product updateproduct(Product pro);
		public void deleteproduct(Product pro);
	}

