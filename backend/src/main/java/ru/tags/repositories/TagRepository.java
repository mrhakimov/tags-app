package ru.tags.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.tags.model.data.Tag;

import java.util.ArrayList;

public interface TagRepository extends JpaRepository<Tag, Long> {
    @Query("SELECT tag FROM Tag WHERE tag LIKE CONCAT('%', :tag, '%') ORDER BY :platform ASC" )
    ArrayList<String> findByTag(@Param("tag") String tag, String platform);
}
