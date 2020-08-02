package ru.tags.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tags.model.PostFit;
import ru.tags.model.RequestCredentials;
import ru.tags.model.data.Tag;
import ru.tags.repositories.TagRepository;

import java.util.ArrayList;
import java.util.Collection;


@RestController
public class TagController {
    private final TagRepository rep;

    @Autowired
    TagController(TagRepository rep) {
        this.rep = rep;
    }


    @CrossOrigin
    @PostMapping("/tag")
    public ArrayList<String> getTag(@RequestBody RequestCredentials data) {
        if (data.getTag() == null || data.getTag().equals("") || data.getPlatform() == null
                || data.getPlatform().equals("") || data.getCount() == null || data.getCount() < 0) {
            return null;
        }

        ArrayList<String> list = rep.findByTag(data.getTag(), data.getPlatform());
        if (list == null || list.isEmpty()) {
            return null;
        }

        PostFit postFit = new PostFit(data.getCount(), list);
        switch (data.getPlatform()) {
            case "Instagram":
                list = (ArrayList<String>) postFit.instagramFit();
                break;
            case "TikTok":
                list = (ArrayList<String>) postFit.tikTokFit();
                break;
            default:
                list = null;
                break;
        }
        return list;


//        tag = new Tag(data.getTag());
//        if (tag.getTag() != null && !tag.getTag().equals("")) {
//            rep.save(tag);
//            System.out.println(data.getCount());
//            return "Успешно!";
//        } else {
//            return "Fault";
//        }


    }

}
