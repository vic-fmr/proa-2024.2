package com.example.demo.controller;

import com.example.demo.repository.AlunoRepository;
import com.example.demo.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")

public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;
/*
    @PostMapping("/add")
    public ResponseEntity<Aluno> addAluno(@RequestBody Aluno aluno){
        alunoRepository.save(aluno);
        return new ResponseEntity<>(aluno, HttpStatus.CREATED) ;
    }
*/
    @PostMapping("/add")
    public ResponseEntity<Aluno> addAluno(@RequestBody Aluno aluno) {
         alunoRepository.save(aluno);
         return ResponseEntity.ok(aluno);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Aluno>> listAlunos(){
        List<Aluno> alunos = alunoRepository.findAll();
        return ResponseEntity.ok(alunos);
    }
}
