package com.accesa.backend.services.implementation;

import com.accesa.backend.dtos.AnswerDto;
import com.accesa.backend.dtos.VoteAnswerDto;
import com.accesa.backend.entities.Answer;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.entities.Quest;
import com.accesa.backend.repositories.AnswerRepository;
import com.accesa.backend.repositories.AppUserRepository;
import com.accesa.backend.repositories.QuestRepository;
import com.accesa.backend.services.AnswerService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class AnswerServiceImp implements AnswerService {

    private final AnswerRepository answerRepository;
    private final AppUserRepository appUserRepository;
    private final QuestRepository  questRepository;

    public AnswerServiceImp(AnswerRepository answerRepository, AppUserRepository appUserRepository, QuestRepository questRepository) {
        this.answerRepository = answerRepository;
        this.appUserRepository = appUserRepository;
        this.questRepository = questRepository;
    }

    @Override
    public Answer saveAnswer(AnswerDto answerDto) {
        AppUser appUser = appUserRepository.findById(answerDto.getIdUser()).get();
        Quest quest = questRepository.findById(answerDto.getIdQuest()).get();
        Answer answer = Answer.builder()
                .answer(answerDto.getAnswer())
                .isBest(false)
                .user(appUser)
                .build();
        answer =  answerRepository.save(answer);
        List<Answer> answers = new LinkedList<>();
        if(quest.getAnswers() != null)
            answers = quest.getAnswers();
        answers.add(answer);
        quest.setAnswers(answers);
        questRepository.save(quest);
        return answer;
    }

    @Override
    public Answer voteAnswer(VoteAnswerDto voteAnswerDto) {
        Quest quest = questRepository.findById(voteAnswerDto.getQuestid()).get();
        Answer answer = answerRepository.findById(voteAnswerDto.getAnswerId()).get();
        answer.setBest(true);
        answerRepository.save(answer);
        AppUser appUser = answer.getUser();
        appUser.setTokens((int) (appUser.getTokens() + quest.getPrize() * 1.5));
        appUserRepository.save(appUser);
        quest.setClosed(true);
        quest.setPrize(0);
        questRepository.save(quest);
        return answer;
    }
}
