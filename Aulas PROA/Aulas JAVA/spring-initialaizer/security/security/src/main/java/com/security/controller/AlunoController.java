package com.security.controller;

import com.security.model.Aluno;
import com.security.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import  org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping("/add")
    public ResponseEntity<String> addAluno(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
        return ResponseEntity.ok("Aluno cadastrado com sucesso!");
    }

    @GetMapping("/list")
    public ResponseEntity<List<Aluno>> listAlunos() {
        List<Aluno> alunos = alunoRepository.findAll();
        return ResponseEntity.ok(alunos);
    }

}
