package ru.tags.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.tags.model.PostFit;
import ru.tags.model.RequestCredentials;
import ru.tags.repositories.TagRepository;

import java.util.ArrayList;

import static java.lang.Character.isWhitespace;
import static java.lang.Character.toLowerCase;

/**
    Authors: Muhammadjon Hakimov, Amirjon Qodirov
 **/
@RestController
public class TagController {
    private final TagRepository tagRepository;

    @Autowired
    TagController(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }


    @RequestMapping("/instagram")
    protected String redirect() {
        return "redirect:public/";
    }

    @CrossOrigin
    @PostMapping("/tag")
    public ArrayList<String> getTag(@RequestBody RequestCredentials data) {
        String allTagsStr = data.getTag();

        // Checking corner cases
        if (allTagsStr == null || allTagsStr.equals("") || data.getPlatform() == null
                || data.getPlatform().equals("") || data.getCount() == null || data.getCount() < 0) {
            return null;
        }

        // Splitting given string to separate potential tags

        allTagsStr += ' ';

        StringBuilder currentTag = new StringBuilder();
        ArrayList<String> allTags = new ArrayList<>();
        
        for (int i = 0; i < allTagsStr.length(); ++i) {
            char c = allTagsStr.charAt(i);
            if (isWhitespace(c) || c == '#') {
                if (!currentTag.toString().isEmpty()) {
                    allTags.add(currentTag.toString());
                    currentTag = new StringBuilder();
                }
            } else {
                currentTag.append(toLowerCase(c));
            }
        }

        // Fetching relevant tags from database to all parsed separate tags
        ArrayList<String> list = new ArrayList<>();
        for (String tag : allTags) {
            list.addAll(tagRepository.findByTag(tag, data.getPlatform()));
        }

        if (list.isEmpty()) {
            return null;
        }

        PostFit postFit = new PostFit(data.getCount(), list);

        // Using 'switch' because code will look be more elegant if we add new platforms
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
