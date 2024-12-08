package com.supermarket.services;

import com.supermarket.entities.Payment;

public interface PaymentService {
	Payment savePayment(Payment payment);
	Payment findPaymentById(int id);
}
