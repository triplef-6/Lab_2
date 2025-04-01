package org.example.services;

import org.example.entities.Customer;
import org.example.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private final CustomerRepository customerRepository;

    private CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(long id) {
        return customerRepository.findById(id);
    }

    public Customer createCustomer(Customer user) {
        return customerRepository.save(user);
    }

    public void deleteCustomer(long id) {
        customerRepository.deleteById(id);
    }

    public Customer updateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
