package com.bit_etland.web.prod;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.bit_etland.web.cat.Category;

import lombok.Data;

@Data @Component @Lazy
public  class Product {
	private String productsID,
					rnum,
					productName,
					supplierID,
					categoryID,
					unit,
					comment,
					price;
	private List<String> freebies;
}
