package com.supermarket.services;

import com.supermarket.entities.Address;

public interface AddressService {
	Address saveAddress(Address address);
	Address findAddress(int id);
}
