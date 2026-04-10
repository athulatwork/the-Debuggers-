package com.example.student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue
    private long id;
    private String name ;
    private String emial ;
     private String course ;
     
}
