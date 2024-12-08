package com.supermarket.services;

import java.util.List;

import com.supermarket.entities.Order;
import com.supermarket.entities.OrderDetails;

public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Order order);
}
