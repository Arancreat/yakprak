package ru.yakprak.backend.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.yakprak.backend.requests.signInRequest;
import ru.yakprak.backend.requests.signUpRequest;
import ru.yakprak.backend.responses.AuthResponse;
import ru.yakprak.backend.services.AuthService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    @PostMapping("/sign_up")
    public ResponseEntity<AuthResponse> signUp(
            @RequestBody signUpRequest request
    ) {
        return ResponseEntity.ok(authService.signUp(request));
    }
    @PostMapping("/sign_in")
    public ResponseEntity<AuthResponse> signIn(
            @RequestBody signInRequest request
    ) {
        return ResponseEntity.ok(authService.signIn(request));
    }
}
