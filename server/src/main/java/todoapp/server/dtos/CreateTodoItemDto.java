package todoapp.server.dtos;

import lombok.Getter;
import todoapp.server.models.TodoItem;

@Getter
public class CreateTodoItemDto {
    private String title;

    public TodoItem generateTodoItem() {
        var todoItem = new TodoItem();
        todoItem.setTitle(title);
        return todoItem;
    }
}
