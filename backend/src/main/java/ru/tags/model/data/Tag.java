package ru.tags.model.data;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Entity
@Table(name = "tag")
public class Tag {
    @Id
    private String tag;
    private Integer instagramID;
    private Integer tiktokID;

    public Tag(String tag) {
        this.tag = tag;
    }

    public void setInstagramID(Integer instagramID) {
        this.instagramID = instagramID;
    }

    public void setTiktokID(Integer tiktokID) {
        this.tiktokID = tiktokID;
    }

    public Tag() {
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
