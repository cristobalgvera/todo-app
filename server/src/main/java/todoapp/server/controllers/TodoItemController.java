package todoapp.server.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import todoapp.server.dtos.todoitem.CreateTodoItemDto;
import todoapp.server.dtos.todoitem.UpdateTitleTodoItemDto;
import todoapp.server.models.TodoItem;
import todoapp.server.services.TodoItemService;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/v1/todo-items", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class TodoItemController extends BaseController {
    private final TodoItemService todoItemService;

    @GetMapping
    public Iterable<TodoItem> findAll() {
        return todoItemService.findAll();
    }

    @GetMapping("/{id}")
    public TodoItem find(@PathVariable Long id) {
        return todoItemService.find(id);
    }

    @PostMapping
    public TodoItem create(@Valid @RequestBody CreateTodoItemDto createTodoItemDto) {
        return todoItemService.create(createTodoItemDto);
    }

    @PatchMapping("/{id}")
    public TodoItem updateTitle(
            @PathVariable Long id,
            @Valid @RequestBody UpdateTitleTodoItemDto updateTitleTodoItemDto
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
