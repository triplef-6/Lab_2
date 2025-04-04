package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        // Dotenv dotenv = Dotenv.load();
        SpringApplication.run(Application.class, args);
    }
}
