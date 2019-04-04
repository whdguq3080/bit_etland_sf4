package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface ProductMapper {
		public void insertProduct(Product pro);
		public Product selectProduct(Product pro);
		public List<Product> selectProducts(Map<?,?> map);
		public List<Product> selectProductlist(Proxy pxy); 
		public List<Product> selectProductlists(String search); 
		public int countProduct();
		public int countProducts(String s);
		public boolean existsProduct(String searchword);
		
		public Product updateproduct(Product pro);
		public void deleteproduct(Product pro);
	}

