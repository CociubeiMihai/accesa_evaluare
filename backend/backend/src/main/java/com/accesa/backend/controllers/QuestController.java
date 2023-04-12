package com.accesa.backend.controllers;

import com.accesa.backend.dtos.EmailPasswordDto;
import com.accesa.backend.dtos.QuestDto;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.services.QuestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("/quest")
public class QuestController {

    private final QuestService questService;

    public QuestController(QuestService questService) {
        this.questService = questService;
    }

    @PostMapping("/save")
    public ResponseEntity login(@RequestBody QuestDto questDto){
        return ResponseEntity.status(HttpStatus.OK).body(questService.saveQuest(questDto));
    }

    @GetMapping("/all")
    public ResponseEntity all(){
        return ResponseEntity.status(HttpStatus.OK).body(questService.findAll());
    }
}
