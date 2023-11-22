package com.example.Club_Union.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstController {

    @GetMapping("/hello")
    public String getHello(){
        return "Hello World!";
    }

    @GetMapping("/test123")
    public String getTest(){
        return "Test22 Page";
    }
}
