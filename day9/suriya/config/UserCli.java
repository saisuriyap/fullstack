package com.party.suriya.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.party.suriya.UserRepository.UserRepository;
import com.party.suriya.enumerated.Role;
import com.party.suriya.model.User;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")

public class UserCli implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0) {
            return;
        }

        User user = User.builder()
                .name("Admin")
                .email("admin1234@gmail.com")
                .password(passwordEncoder.encode("admin@123"))
                .role(Role.ADMIN)
                .build();

        userRepository.save(user);
    }
}
