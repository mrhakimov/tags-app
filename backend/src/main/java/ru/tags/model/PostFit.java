package ru.tags.model;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class PostFit {
    private Integer len;
    private List<String> tags;

    public PostFit(Integer len, List<String> tags) {
        this.len = len;
        this.tags = tags;
    }

    private int calculatePrefixSums(List<String> tags, ArrayList<Integer> prefixSums, int len) {
        tags.sort(Comparator.comparing(String::length));
        if (tags.get(0).length() + 2 > len) {
            return 0;
        }

        prefixSums.add(tags.get(0).length() + 2);

        int index = tags.size();
        for (int i = 1; i < tags.size(); ++i) {
            prefixSums.add(prefixSums.get(i - 1) + tags.get(i).length() + 2);

            if (prefixSums.get(i) > len) {
                index = i;
                break;
            }
        }

        return index;
    }

    public List<String> instagramFit() {
        int MAX_LEN = 2200;
        int MAX_TAGS = 30;

        len = MAX_LEN - len;
        if (tags.size() > MAX_TAGS) {
            tags = tags.stream().limit(MAX_TAGS).collect(Collectors.toList());
        }

        ArrayList<Integer> prefixSums = new ArrayList<>();
        int index = calculatePrefixSums(tags, prefixSums, len);

        tags = tags.stream().limit(index).collect(Collectors.toList());
        return tags;
    }

    public List<String> tikTokFit() {
        int MAX_LEN = 100;

        len = MAX_LEN - len;

        ArrayList<Integer> prefixSums = new ArrayList<>();
        int index = calculatePrefixSums(tags, prefixSums, len);


        tags = tags.stream().limit(index).collect(Collectors.toList());
        return tags;
    }


}
