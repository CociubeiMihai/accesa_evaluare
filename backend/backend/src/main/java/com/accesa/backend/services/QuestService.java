package com.accesa.backend.services;

import com.accesa.backend.dtos.QuestDto;
import com.accesa.backend.entities.Quest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface QuestService {

    Quest saveQuest(QuestDto questDto);
    List<Quest> findAll();
}
