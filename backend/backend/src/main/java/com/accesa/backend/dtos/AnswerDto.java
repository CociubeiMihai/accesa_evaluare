package com.accesa.backend.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class AnswerDto {

    private UUID idQuest;
    private UUID idUser;
    private String answer;

}
