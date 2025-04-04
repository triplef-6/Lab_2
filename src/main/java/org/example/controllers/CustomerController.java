package org.example.controllers;

import java.util.List;
import java.util.Optional;

import org.example.entities.AutInfo;
import org.example.entities.Customer;
import org.example.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/login")
    @ResponseBody
    public Customer autentification(@RequestBody AutInfo aut) {
        return customerService.autentification(aut.getEmail(), aut.getPassword());
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
