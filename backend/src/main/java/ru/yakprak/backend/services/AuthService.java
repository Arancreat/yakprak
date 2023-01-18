package ru.yakprak.backend.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.yakprak.backend.models.Role;
import ru.yakprak.backend.models.User;
import ru.yakprak.backend.models.UserInfo;
import ru.yakprak.backend.repos.UserRepo;
import ru.yakprak.backend.requests.signInRequest;
import ru.yakprak.backend.requests.signUpRequest;
import ru.yakprak.backend.responses.AuthResponse;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse signUp(signUpRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .userInfo(new UserInfo())
                .build();
        userRepo.save(user);
        var jwt = jwtService.generateJwt(user);
        return AuthResponse.builder()
                .token(jwt)
                .build();
    }

    public AuthResponse signIn(signInRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwt = jwtService.generateJwt(user);
        return AuthResponse.builder()
                .token(jwt)
                .build();
    }
}
