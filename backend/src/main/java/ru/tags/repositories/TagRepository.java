package ru.tags.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.tags.model.data.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {

}
