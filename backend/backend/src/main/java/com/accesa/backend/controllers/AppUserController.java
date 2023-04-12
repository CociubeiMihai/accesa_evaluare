package com.accesa.backend.controllers;

import com.accesa.backend.dtos.EmailPasswordDto;
import com.accesa.backend.entities.AppUser;
import com.accesa.backend.services.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody EmailPasswordDto emailPasswordDto){
        AppUser appUser = appUserService.login(emailPasswordDto);
        return ResponseEntity.status(HttpStatus.OK).body(Objects.requireNonNullElse(appUser, "Nu s-a gasit"));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody EmailPasswordDto emailPasswordDto){
        return ResponseEntity.status(HttpStatus.OK).body(appUserService.register(emailPasswordDto));
    }

    @GetMapping("/all")
    public ResponseEntity findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(appUserService.findAll());
    }
}
