package com.hyeonexcel.blog.service;

import com.hyeonexcel.blog.domain.category.Category;
import com.hyeonexcel.blog.domain.category.CategoryRepository;
import com.hyeonexcel.blog.dto.CategoryDto;
import com.hyeonexcel.blog.dto.CategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(CategoryMapper::toDto)
                .collect(Collectors.toList());
    }

    public CategoryDto getCategory(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 없습니다. id=" + id));
        return CategoryMapper.toDto(category);
    }

    public CategoryDto createCategory(CategoryDto dto) {
        Category saved = categoryRepository.save(CategoryMapper.toEntity(dto));
        return CategoryMapper.toDto(saved);
    }

    public CategoryDto updateCategory(Long id, CategoryDto dto) {
        Category existing = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 없습니다. id=" + id));
        existing.setName(dto.getName());
        return CategoryMapper.toDto(categoryRepository.save(existing));
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
