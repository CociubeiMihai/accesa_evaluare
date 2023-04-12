package com.accesa.backend.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class VoteAnswerDto {

    private UUID questid;
    private UUID answerId;
}
