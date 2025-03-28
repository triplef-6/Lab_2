package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

//@Getter
//@Setter
//@ToString
//@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn(name = "id_customer")
    private Long id_customer;
    @JoinColumn(name = "id_products")
    private List<Long> id_products;
    private int cost;

}
