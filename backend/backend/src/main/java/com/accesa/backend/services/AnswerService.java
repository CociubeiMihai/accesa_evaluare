package com.accesa.backend.services;

import com.accesa.backend.dtos.AnswerDto;
import com.accesa.backend.dtos.VoteAnswerDto;
import com.accesa.backend.entities.Answer;
import org.springframework.stereotype.Component;

@Component
public interface AnswerService {

    Answer saveAnswer(AnswerDto answerDto);
    Answer voteAnswer(VoteAnswerDto voteAnswerDto);
}
