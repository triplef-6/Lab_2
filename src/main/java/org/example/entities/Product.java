package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

//@Getter
//@Setter
//@ToString
//@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor

@Data
@Entity
@Table(name = "user")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private int cost;
    private String url_product;


}
