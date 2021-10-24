package todoapp.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import todoapp.server.dtos.CreateTodoItemDto;
import todoapp.server.dtos.UpdateTitleTodoItemDto;
import todoapp.server.models.TodoItem;
import todoapp.server.repositories.TodoItemRepository;

@Service
public class TodoItemService {
    private final TodoItemRepository todoItemRepository;

    public TodoItemService(@Autowired TodoItemRepository todoItemRepository) {
        this.todoItemRepository = todoItemRepository;
    }

    public Iterable<TodoItem> findAll() {
        return todoItemRepository.findAll();
    }

    public TodoItem find(Long id) {
        return todoItemRepository
                .findById(id)
                .orElseThrow(() -> notFound(id));
    }

    public TodoItem create(CreateTodoItemDto createTodoItemDto) {
        return todoItemRepository.saveAndFlush(createTodoItemDto.generateTodoItem());
    }

    public TodoItem updateTitle(Long id, UpdateTitleTodoItemDto updateTitleTodoItemDto) {
        var todoItem = find(id);
        todoItem.setTitle(updateTitleTodoItemDto.getTitle());
        return todoItemRepository.saveAndFlush(todoItem);
    }

    public TodoItem toggleCompleted(Long id) {
        var todoItem = find(id);
        todoItem.toggleCompleted();
        return todoItemRepository.saveAndFlush(todoItem);
    }

    public void delete(Long id) {
        var exists = checkExistence(id);
        if (!exists)
            throw notFound(id);

        todoItemRepository.deleteById(id);
    }

    private boolean checkExistence(Long id) {
        return todoItemRepository.existsById(id);
    }

    private ResponseStatusException notFound(Long id) {
        return new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                String.format("To-do with ID: %d, was not found", id)
        );
    }
}
