package com.bit_etland.web.emp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Employee {
	private String employeesID,
	manager,
	name,
	birthDate,
	photo,
	notes;
}
