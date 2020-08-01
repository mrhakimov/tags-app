package main.java.ru.tags.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.tags.model.data.Tag;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
public class BoxController {
    @CrossOrigin
    @GetMapping("/boxes")
    public Collection<Tag> getFoods(){
        Tag tag = new Tag("Tag");
        List<Tag> list = new ArrayList<>();
        list.add(tag);
        return list;
    }

}
