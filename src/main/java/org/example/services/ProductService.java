package org.example.services;

import org.example.entities.Product;
import org.example.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    private final ProductRepository ProductRepository;

    private ProductService(ProductRepository productRepository) {
        this.ProductRepository = productRepository;
    }

    public List<Product> getAllProduct() {
        return ProductRepository.findAll();
    }

    public Optional<Product> getProductById(long id) {
        return ProductRepository.findById(id);
    }

    public Product createProduct(Product user) {
        return ProductRepository.save(user);
    }

    public void deleteProduct(long id) {
        ProductRepository.deleteById(id);
    }

    public Product updateProduct(Product Product) {
        return ProductRepository.save(Product);
    }
}
