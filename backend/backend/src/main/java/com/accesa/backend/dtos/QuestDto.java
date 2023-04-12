package com.accesa.backend.dtos;

import lombok.Data;

import java.util.UUID;

@Data
public class QuestDto {
    private String title;
    private String description;
    private int prize;
    private UUID idAuthor;
}
