package todoapp.server.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import todoapp.server.dtos.todoitem.CreateTodoItemDto;
import todoapp.server.dtos.todoitem.UpdateTitleTodoItemDto;
import todoapp.server.models.TodoItem;
import todoapp.server.repositories.TodoItemRepository;

import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
public class TodoItemService {
    private final TodoItemRepository todoItemRepository;

    public Iterable<TodoItem> findAll() {
        return todoItemRepository.findAll();
    }

    public TodoItem find(Long id) throws EntityNotFoundException {
        return todoItemRepository
                .findById(id)
                .orElseThrow(() -> notFound(id));
    }

    public TodoItem create(CreateTodoItemDto createTodoItemDto) {
        return todoItemRepository.saveAndFlush(createTodoItemDto.generateTodoItem());
    }

    public TodoItem updateTitle(
            Long id,
            UpdateTitleTodoItemDto updateTitleTodoItemDto
    ) throws EntityNotFoundException {
        var todoItem = find(id);
        todoItem.setTitle(updateTitleTodoItemDto.getTitle());
        return todoItemRepository.saveAndFlush(todoItem);
    }

    public TodoItem toggleCompleted(Long id) throws EntityNotFoundException {
        var todoItem = find(id);
        todoItem.toggleCompleted();
        return todoItemRepository.saveAndFlush(todoItem);
    }

    public void delete(Long id) throws EntityNotFoundException {
        var exists = checkExistence(id);
        if (!exists)
            throw notFound(id);

        todoItemRepository.deleteById(id);
    }

    private boolean checkExistence(Long id) {
        return todoItemRepository.existsById(id);
    }

    private EntityNotFoundException notFound(Long id) {
        return new EntityNotFoundException(String.format("To-do with ID: %d, was not found", id));
    }
}
