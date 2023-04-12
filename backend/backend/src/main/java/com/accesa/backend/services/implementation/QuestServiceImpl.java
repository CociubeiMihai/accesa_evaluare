package com.accesa.backend.services.implementation;

import com.accesa.backend.dtos.QuestDto;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.entities.Quest;
import com.accesa.backend.repositories.AppUserRepository;
import com.accesa.backend.repositories.QuestRepository;
import com.accesa.backend.services.QuestService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestServiceImpl implements QuestService {

    private final QuestRepository questRepository;
    private final AppUserRepository appUserRepository;

    public QuestServiceImpl(QuestRepository questRepository, AppUserRepository appUserRepository) {
        this.questRepository = questRepository;
        this.appUserRepository = appUserRepository;
    }

    @Override
    public Quest saveQuest(QuestDto questDto) {
        AppUser appUser = appUserRepository.findById(questDto.getIdAuthor()).get();
        appUser.setTokens(appUser.getTokens() - questDto.getPrize());
        appUserRepository.save(appUser);
        Quest quest = Quest.builder()
                .title(questDto.getTitle())
                .prize(questDto.getPrize())
                .description(questDto.getDescription())
                .author(appUser)
                .build();
        return questRepository.save(quest);
    }

    @Override
    public List<Quest> findAll() {
        return questRepository.findAll();
    }
}
