package com.supermarket.services;

import java.util.List;

import com.supermarket.entities.Category;

public interface CategoryService {
	void save(Category cat);
	List<Category> listAll();
	Category findById(int id);
	void deleteCategory(int id);
	void updateStatus(int id,boolean status);
}
