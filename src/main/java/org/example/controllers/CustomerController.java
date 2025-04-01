package org.example.controllers;

import org.example.entities.Customer;
import org.example.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    @ResponseBody
    public List<Customer> getAllCustomer() {
        return customerService.getAllCustomer();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Optional<Customer> getCustomerById(@PathVariable long id) {
        return customerService.getCustomerById(id);
    }

    @PostMapping
    @ResponseBody
    public Customer createCustomer(@RequestBody Customer user) {
        return customerService.createCustomer(user);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteCustomer(@PathVariable long id) {
        customerService.deleteCustomer(id);
    }


    @PostMapping("/{id}")
    @ResponseBody
    public Customer updateCustomer(@PathVariable  long id, @RequestBody Customer customer) {
       return customerService.updateCustomer(customer);
    }
}
