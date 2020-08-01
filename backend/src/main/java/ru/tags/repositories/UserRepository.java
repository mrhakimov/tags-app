package main.java.ru.tags.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.uzhin.foodshop.model.data.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
