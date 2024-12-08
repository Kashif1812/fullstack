package com.supermarket.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.entities.Address;
import com.supermarket.entities.Customer;
import com.supermarket.entities.Order;
import com.supermarket.entities.OrderDetails;
import com.supermarket.entities.Payment;
import com.supermarket.entities.Product;
import com.supermarket.models.CartDTO;
import com.supermarket.models.OrderDetailsDTO;
import com.supermarket.models.OrderResponseDTO;
import com.supermarket.models.PlaceOrderDTO;
import com.supermarket.models.Response;
import com.supermarket.services.AddressService;
import com.supermarket.services.CustomerService;
import com.supermarket.services.OrderService;
import com.supermarket.services.OrderdetailService;
import com.supermarket.services.PaymentService;
import com.supermarket.services.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/api/orders")
public class OrdersController {

	@Autowired OrderService orderService;
	@Autowired CustomerService customerService;
	@Autowired AddressService addressService;
	@Autowired PaymentService paymentService;
	@Autowired OrderdetailService orderDetailsService;	
	@Autowired ProductService pservice;	
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody PlaceOrderDTO dto) {	
		Address address=addressService.saveAddress(dto.getAddress());
		Payment payment=paymentService.savePayment(dto.getPayment());
		Order order=new Order();
		order.setAddress(address);
		order.setPayment(payment);
		Customer customer=customerService.findById(dto.getCustomerid());
		order.setCustomer(customer);
		Order orders=orderService.saveOrder(order);
		
		for(CartDTO cart : dto.getCart()) {
			OrderDetails od=new OrderDetails();
			od.setOrder(orders);
			od.setQty(cart.getQty());
			Product product=pservice.findProductById(cart.getProdid());
			od.setProduct(product);			
			orderDetailsService.saveOrderDetails(od);
		}
		
		return Response.status(HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<?> findAllOrders(Optional<Integer> custid) {
		List<Order> result=null;
		if(custid.isPresent()) {
			Customer customer=customerService.findById(custid.get());
			 result= orderService.getCustomerOrders(customer);
		}else {
			result = orderService.getAllOrders();
		}
		return Response.success(result);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findOrderById(@PathVariable("id") int id) {
		Order order = orderService.findById(id);
		List<OrderDetails> details=orderDetailsService.findByOrder(order);
		List<OrderDetailsDTO> detailsdto=new ArrayList<OrderDetailsDTO>();
		details.forEach(od -> {
			OrderDetailsDTO dto=OrderDetailsDTO.fromEntity(od);
			detailsdto.add(dto);
		});
		OrderResponseDTO result=new OrderResponseDTO();
		result.setOrder(order);
		result.setDetails(detailsdto);
		return Response.success(result);
	}
}
