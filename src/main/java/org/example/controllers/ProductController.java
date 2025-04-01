package org.example.controllers;

import org.example.entities.Product;
import org.example.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    public ProductController(ProductService ProductService) {
        this.productService = ProductService;
    }

    @GetMapping
    @ResponseBody
    public List<Product> getAllProduct() {
        return productService.getAllProduct();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Optional<Product> getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    @ResponseBody
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
    }


    @PostMapping("/{id}")
    @ResponseBody
    public Product updateProduct(@PathVariable long id, @RequestBody Product product) {
        return productService.updateProduct(product);
    }
}
