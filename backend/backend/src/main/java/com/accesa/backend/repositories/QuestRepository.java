package com.accesa.backend.repositories;

import com.accesa.backend.entities.Quest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QuestRepository extends JpaRepository<Quest, UUID> {
}
