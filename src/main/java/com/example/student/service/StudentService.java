package com.example.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
         
        //create 
        public Student saveStudent(Student student ){

            if(student.getName()== null ){
                throw new RuntimeException("Name is required");
            }
        return studentRepository.save(student);
    }
       //read 
       public List<Student> getAllStudents(){
         return studentRepository.findAll();
       }
        
       ///update 
    //   public Student studentUpdate(){}
      public  Student getById(long id ){
        return studentRepository.findById(id).orElse(null);
      } 
      public void deleteStudent( Long id ){
         studentRepository.deleteById(id);
      }
}
