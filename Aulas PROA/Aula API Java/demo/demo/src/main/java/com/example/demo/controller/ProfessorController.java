package com.example.demo.controller;

import com.example.demo.model.Professor;
import com.example.demo.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professores")

public class ProfessorController {

    @Autowired
    private ProfessorRepository professorRepository;

    @PostMapping("/add")
    public ResponseEntity<Professor> addAluno(@RequestBody Professor professor) {
        professorRepository.save(professor);
        return ResponseEntity.ok(professor);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Professor>> listAlunos(){
        List<Professor> alunos = professorRepository.findAll();
        return ResponseEntity.ok(alunos);
    }
}
