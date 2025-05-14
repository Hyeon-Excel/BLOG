package com.hyeonexcel.blog.dto;

import com.hyeonexcel.blog.domain.category.Category;

import java.time.LocalDateTime;

public class CategoryMapper {

    public static Category toEntity(CategoryDto dto) {
        return Category.builder()
                .id(dto.getId())
                .name(dto.getName())
                .createdAt(LocalDateTime.now())
                .build();
    }

    public static CategoryDto toDto(Category entity) {
        return CategoryDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .build();
    }
}
