package com.supermarket.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.entities.Customer;
import com.supermarket.entities.Order;

@Repository
public interface OrderDao extends JpaRepository<Order, Integer> {
	List<Order> findByCustomer(Customer customer);
}
