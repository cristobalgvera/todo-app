package todoapp.server.dtos;

import todoapp.server.models.TodoItem;

public class CreateTodoItemDto extends UpsertTodoItemDto {
    public TodoItem generateTodoItem() {
        var todoItem = new TodoItem();
        todoItem.setTitle(title);
        return todoItem;
    }
}
