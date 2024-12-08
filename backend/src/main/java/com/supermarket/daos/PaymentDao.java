package com.supermarket.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarket.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
