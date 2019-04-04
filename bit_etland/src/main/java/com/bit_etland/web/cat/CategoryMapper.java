package com.bit_etland.web.cat;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;


@Repository
public interface CategoryMapper {
	public String txCategory(String categoryName);
	public List<?> selectCategorieList(Proxy pagePxy); 
	public List<CategoryMapper> selectCategorie(Category cat);
	public CategoryMapper selectCategories(String searchWord);
	public int countCategorie(Proxy pxy);
	public boolean existsCategorie(String searchword);
	public void updateCategorie(CategoryMapper car);
	public void deleteCategorie(CategoryMapper car);
}