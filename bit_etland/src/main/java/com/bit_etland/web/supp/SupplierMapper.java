package com.bit_etland.web.supp;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface SupplierMapper {
	public String txSupplier(String supplierID);
	public List<?> selectSupplierList(Proxy pagePxy); 
	public List<SupplierMapper> selectSupplier(Supplier sup);
	public SupplierMapper selectSuppliers(String searchWord);
	public int countSupplier(Proxy pxy);
	public boolean existsSupplier(String searchword);
	public void updateSupplier(SupplierMapper sup);
	public void deleteSupplier(SupplierMapper sup);
}
