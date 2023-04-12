package com.accesa.backend.services.implementation;

import com.accesa.backend.dtos.EmailPasswordDto;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.repositories.AppUserRepository;
import com.accesa.backend.services.AppUserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public AppUser register(EmailPasswordDto emailPasswordDto) {
        AppUser appUser = AppUser.builder()
                .email(emailPasswordDto.getEmail())
                .password(emailPasswordDto.getPassword())
                .tokens(10)
                .badges(1)
                .build();
        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser login(EmailPasswordDto emailPasswordDto) {
        return appUserRepository.findByEmailAndPassword(emailPasswordDto.getEmail(), emailPasswordDto.getPassword());
    }

    @Override
    public List<AppUser> findAll() {
        return appUserRepository.findAllUsers();
    }
}
