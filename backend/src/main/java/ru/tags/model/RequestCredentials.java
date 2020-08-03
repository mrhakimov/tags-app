package ru.tags.model;

public class RequestCredentials {
    private String tag;
    private Integer count;
    private String platform;

    public RequestCredentials(String tag, Integer count, String platform) {
        this.tag = tag;
        this.count = count;
        this.platform = platform;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
