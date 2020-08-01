package ru.tags.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tags.model.data.Tag;
import ru.tags.repositories.TagRepository;


@RestController
public class TagController {
    private final TagRepository rep;

    @Autowired
    TagController(TagRepository rep) {
        this.rep = rep;
    }


    @CrossOrigin
    @PostMapping("/tag")
    public String getTag(@RequestBody Tag tag) {
        if (tag != null && !tag.getTag().equals("")) {
            rep.save(tag);
            return "Успешно!";
        } else {
            return "Fault";
        }
    }

}
