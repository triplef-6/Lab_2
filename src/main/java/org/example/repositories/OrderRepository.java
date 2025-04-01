package org.example.repositories;

import org.example.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerId(long customerId);
    List<Order> findByProductId(long productId);
}
