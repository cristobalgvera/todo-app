package todoapp.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todoapp.server.dtos.CreateTodoItemDto;
import todoapp.server.dtos.UpdateTitleTodoItemDto;
import todoapp.server.models.TodoItem;
import todoapp.server.services.TodoItemService;

@RestController
@RequestMapping("todo-items")
public class TodoItemController {
    private final TodoItemService todoItemService;

    public TodoItemController(@Autowired TodoItemService todoItemService) {
        this.todoItemService = todoItemService;
    }

    @GetMapping
    public Iterable<TodoItem> findAll() {
        return todoItemService.findAll();
    }

    @GetMapping("/{id}")
    public TodoItem find(@PathVariable Long id) {
        return todoItemService.find(id);
    }

    @PostMapping
    public TodoItem create(@RequestBody CreateTodoItemDto createTodoItemDto) {
        return todoItemService.create(createTodoItemDto);
    }

    @PatchMapping("/{id}")
    public TodoItem updateTitle(
            @PathVariable Long id,
            @RequestBody UpdateTitleTodoItemDto updateTitleTodoItemDto
    ) {
        return todoItemService.updateTitle(id, updateTitleTodoItemDto);
    }

    @PatchMapping("/toggle-completed/{id}")
    public TodoItem toggleCompleted(@PathVariable Long id) {
        return todoItemService.toggleCompleted(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        todoItemService.delete(id);
    }
}
