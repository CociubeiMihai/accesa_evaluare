package com.accesa.backend.repositories;

import com.accesa.backend.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AppUserRepository extends JpaRepository<AppUser, UUID> {

    AppUser findByEmailAndPassword(String email, String password);
    @Query("select a from AppUser a ORDER BY a.tokens desc ")
    List<AppUser> findAllUsers();

}
