package ru.yakprak.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class signUpRequest {
    private String username;
    private String firstName;
    private String lastName;
    private String patronymic;
    private String email;
    private String password;
}
