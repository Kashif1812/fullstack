package com.supermarket.services;

import java.util.List;

import com.supermarket.entities.Customer;
import com.supermarket.entities.Order;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}
