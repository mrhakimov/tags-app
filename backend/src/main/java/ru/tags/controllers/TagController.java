package ru.tags.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.tags.model.PostFit;
import ru.tags.model.RequestCredentials;
import ru.tags.repositories.TagRepository;

import java.util.ArrayList;

import static java.lang.Character.isWhitespace;
import static java.lang.Character.toLowerCase;


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
        String allTagsStr = data.getTag();
        if (allTagsStr == null || allTagsStr.equals("") || data.getPlatform() == null
                || data.getPlatform().equals("") || data.getCount() == null || data.getCount() < 0) {
            return null;
        }

        StringBuilder currentTag = new StringBuilder();
        allTagsStr += ' ';
        ArrayList<String> allTags = new ArrayList<>();
        for (int i = 0; i < allTagsStr.length(); ++i) {
            char c = allTagsStr.charAt(i);
            if (isWhitespace(c)) {
                if (!currentTag.toString().isEmpty()) {
                    allTags.add(currentTag.toString());
                    currentTag = new StringBuilder();
                }
            } else {
                currentTag.append(toLowerCase(c));
            }
        }

        ArrayList<String> list = new ArrayList<>();
        for (String tag : allTags) {
            list.addAll(rep.findByTag(tag, data.getPlatform()));
        }

        rep.findByTag(allTagsStr, data.getPlatform());
        if (list.isEmpty()) {
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
    }
}
