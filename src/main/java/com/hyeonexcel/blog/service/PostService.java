package com.hyeonexcel.blog.service;

import com.hyeonexcel.blog.domain.post.Post;
import com.hyeonexcel.blog.domain.post.PostRepository;
import com.hyeonexcel.blog.domain.category.Category;
import com.hyeonexcel.blog.domain.category.CategoryRepository;
import com.hyeonexcel.blog.dto.PostDto;
import com.hyeonexcel.blog.dto.PostMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    public List<PostDto> getAllPosts() {
        return postRepository.findAll()
                .stream()
                .map(PostMapper::toDto)
                .collect(Collectors.toList());
    }

    public List<PostDto> getPostsByCategory(Long categoryId) {
        return postRepository.findByCategoryId(categoryId)
                .stream()
                .map(PostMapper::toDto)
                .collect(Collectors.toList());
    }

    public PostDto getPost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        return PostMapper.toDto(post);
    }

    public PostDto createPost(PostDto dto) {
        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 없습니다. id=" + dto.getCategoryId()));
        Post saved = postRepository.save(PostMapper.toEntity(dto, category));
        return PostMapper.toDto(saved);
    }

    public PostDto updatePost(Long id, PostDto dto) {
        Post existing = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("해당 카테고리가 없습니다. id=" + dto.getCategoryId()));

        existing.setTitle(dto.getTitle());
        existing.setContent(dto.getContent());
        existing.setThumbnailUrl(dto.getThumbnailUrl());
        existing.setCategory(category);
        existing.setUpdatedAt(java.time.LocalDateTime.now());

        return PostMapper.toDto(postRepository.save(existing));
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}
