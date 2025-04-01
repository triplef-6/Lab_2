package org.example.controllers;

import org.example.entities.Order;
import org.example.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService OrderService) {
        this.orderService = OrderService;
    }

    @GetMapping
    @ResponseBody
    public List<Order> getAllOrder() {
        return orderService.getAllOrder();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Optional<Order> getOrderById(@PathVariable long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    @ResponseBody
    public Order createOrder(@RequestBody Order Order) {
        return orderService.createOrder(Order);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteOrder(@PathVariable long id) {
        orderService.deleteOrder(id);
    }


    @PostMapping("/{id}")
    @ResponseBody
    public Order updateOrder(@PathVariable long id, @RequestBody Order Order) {
        return orderService.updateOrder(Order);
    }

    @GetMapping("/product/{id}")
    @ResponseBody
    public List<Order> getOrderByProductId(long id) {
        return orderService.getOrderByProductId(id);
    }

    @GetMapping("/customer/{id}")
    @ResponseBody
    public List<Order> getOrderByCustomerId(long id) {
        return orderService.getOrderByCustomerId(id);
    }

}
