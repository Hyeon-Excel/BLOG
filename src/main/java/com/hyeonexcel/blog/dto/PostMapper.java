package com.hyeonexcel.blog.dto;

import com.hyeonexcel.blog.domain.post.Post;
import com.hyeonexcel.blog.domain.category.Category;

import java.time.LocalDateTime;

public class PostMapper {

    public static Post toEntity(PostDto dto, Category category) {
        return Post.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .thumbnailUrl(dto.getThumbnailUrl())
                .createdAt(dto.getCreatedAt() != null ? dto.getCreatedAt() : LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .category(category)
                .build();
    }

    public static PostDto toDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .thumbnailUrl(post.getThumbnailUrl())
                .createdAt(post.getCreatedAt())
                .updatedAt(post.getUpdatedAt())
                .categoryId(post.getCategory().getId())
                .build();
    }
}
