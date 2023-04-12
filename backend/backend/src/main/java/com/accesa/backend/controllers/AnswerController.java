package com.accesa.backend.controllers;

import com.accesa.backend.dtos.AnswerDto;
import com.accesa.backend.dtos.EmailPasswordDto;
import com.accesa.backend.dtos.VoteAnswerDto;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.services.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("/answer")
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody AnswerDto answerDto){
        return ResponseEntity.status(HttpStatus.OK).body(answerService.saveAnswer(answerDto));
    }

    @PostMapping("/vote")
    public ResponseEntity vote(@RequestBody VoteAnswerDto voteAnswerDto){
        return ResponseEntity.status(HttpStatus.OK).body(answerService.voteAnswer(voteAnswerDto));
    }
}
