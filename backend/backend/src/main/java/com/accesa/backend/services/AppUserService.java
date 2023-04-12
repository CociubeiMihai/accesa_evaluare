package com.accesa.backend.services;

import com.accesa.backend.dtos.EmailPasswordDto;
import com.accesa.backend.entities.AppUser;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface AppUserService {

    AppUser register (EmailPasswordDto emailPasswordDto);
    AppUser login (EmailPasswordDto emailPasswordDto);
    List<AppUser> findAll();

}
