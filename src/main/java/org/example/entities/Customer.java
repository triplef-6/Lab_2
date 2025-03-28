package org.example.entities;

import lombok.*;
import jakarta.persistence.*;


@Data
@Entity
@Table(name = "customers")

//@Getter
//@Setter
//@ToString
//@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String email;
}
