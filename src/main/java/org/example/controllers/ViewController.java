package org.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping(value = {"/"})
    public String redirect() {
        return "forward:/frontend/public/index.html";
    }
}
