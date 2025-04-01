package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn(name = "customerId")
    private Long customerId;
    @JoinColumn(name = "productId")
    private Long productId;
    private int cost;

}
