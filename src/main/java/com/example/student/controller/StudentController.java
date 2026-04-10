package com.example.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.student.model.Student;
import com.example.student.service.StudentService;

@Controller
public class StudentController {
    @Autowired
    private StudentService studentService;


@GetMapping("/")
public String homePage  (Model model ){
    return"home";
}
    @GetMapping("/read")
     public String home (Model model )
    {

        List<Student> getAllStudent = studentService.getAllStudents();
        model.addAttribute("students", getAllStudent);
        return "index";
    }
}
