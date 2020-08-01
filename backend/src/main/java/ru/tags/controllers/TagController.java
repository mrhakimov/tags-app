package ru.tags.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tags.model.RequestCredentials;
import ru.tags.model.data.Tag;
import ru.tags.repositories.TagRepository;


@RestController
public class TagController {
    private final TagRepository rep;
    private Tag tag;

    @Autowired
    TagController(TagRepository rep) {
        this.rep = rep;
    }


    @CrossOrigin
    @PostMapping("/tag")
    public String getTag(@RequestBody RequestCredentials data) {
        tag = new Tag(data.getTag());
        if (tag.getTag() != null && !tag.getTag().equals("")) {
            rep.save(tag);
            System.out.println(data.getCount());
            return "Успешно!";
        } else {
            return "Fault";
        }
    }

}
