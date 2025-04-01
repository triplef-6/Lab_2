package org.example.services;

import org.example.entities.Order;
import org.example.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private final OrderRepository orderRepository;

    private OrderService(OrderRepository OrderRepository) {
        this.orderRepository = OrderRepository;
    }

    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(long id) {
        return orderRepository.findById(id);
    }

    public Order createOrder(Order user) {
        return orderRepository.save(user);
    }

    public void deleteOrder(long id) {
        orderRepository.deleteById(id);
    }

    public Order updateOrder(Order Order) {
        return orderRepository.save(Order);
    }


    public List<Order> getOrderByCustomerId(long customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    public List<Order> getOrderByProductId(long productId) {
        return orderRepository.findByProductId(productId);
    }
}
