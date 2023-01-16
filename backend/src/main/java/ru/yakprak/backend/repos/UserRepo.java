package ru.yakprak.backend.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.yakprak.backend.models.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
