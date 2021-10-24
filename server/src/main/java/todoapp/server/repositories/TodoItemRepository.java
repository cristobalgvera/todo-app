package todoapp.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import todoapp.server.models.TodoItem;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
}
