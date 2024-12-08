package com.supermarket.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.entities.Order;
import com.supermarket.entities.OrderDetails;

@Repository
public interface OrderDefailsDao extends JpaRepository<OrderDetails, Integer> {
	List<OrderDetails> findByOrder(Order order);
}
