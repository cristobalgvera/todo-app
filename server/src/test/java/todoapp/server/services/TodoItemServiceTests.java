package todoapp.server.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import todoapp.server.dtos.todoitem.CreateTodoItemDto;
import todoapp.server.dtos.todoitem.UpdateTitleTodoItemDto;
import todoapp.server.models.TodoItem;
import todoapp.server.repositories.TodoItemRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TodoItemServiceTests {
    @Mock
    private TodoItemRepository todoItemRepository;

    @InjectMocks
    private TodoItemService todoItemService;

    private TodoItem todoItem;

    @BeforeEach
    void setUp() {
        todoItem = new TodoItem(1L, "Test", false, new Date(), new Date());

        todoItemRepository = mock(TodoItemRepository.class);
        todoItemService = new TodoItemService(todoItemRepository);
    }

    @Test
    void findTodoItemById() {
        when(todoItemRepository.findById(any(Long.class))).thenReturn(Optional.of(todoItem));

        var returnedTodoItem = todoItemService.find(todoItem.getId());

        assertThat(returnedTodoItem).isNotNull();
        assertThat(returnedTodoItem.getId()).isEqualTo(todoItem.getId());
    }

    @Test
    void findTodoItemById_NotFound() {
        when(todoItemRepository.findById(any(Long.class))).thenReturn(Optional.empty());

        assertThatExceptionOfType(EntityNotFoundException.class)
                .isThrownBy(() -> todoItemService.find(1L));
    }

    @Test
    void findAllTodoItems() {
        when(todoItemRepository.findAll()).thenReturn(List.of(todoItem));

        var returnedTodoItems = todoItemService.findAll();

        assertThat(returnedTodoItems).isNotNull();
        assertThat(returnedTodoItems).hasSize(1);
        assertThat(returnedTodoItems.iterator().next().getId()).isEqualTo(todoItem.getId());
    }

    @Test
    void createTodoItem() {
        var createTodoItemDto = new CreateTodoItemDto();
        createTodoItemDto.setTitle(todoItem.getTitle());

        when(todoItemRepository.saveAndFlush(any(TodoItem.class))).thenReturn(todoItem);

        var returnedTodoItem = todoItemService.create(createTodoItemDto);

        assertThat(returnedTodoItem).isNotNull();
        assertThat(returnedTodoItem.getTitle()).isEqualTo(todoItem.getTitle());
    }

    @Test
    void updateTodoItemTile() {
        var updatedTitle = "UPDATED TITLE";

        var updateTodoItemDto = new UpdateTitleTodoItemDto();
        updateTodoItemDto.setTitle(updatedTitle);

        when(todoItemRepository.findById(any(Long.class))).thenReturn(Optional.of(todoItem));
        when(todoItemRepository.saveAndFlush(any(TodoItem.class))).thenReturn(todoItem);

        var returnedTodoItem = todoItemService.updateTitle(todoItem.getId(), updateTodoItemDto);

        assertThat(returnedTodoItem).isNotNull();
        assertThat(returnedTodoItem.getTitle()).isEqualTo(updatedTitle);
    }

    @Test
    void updateTodoItemTile_NotFound() {
        var updateTodoItemDto = new UpdateTitleTodoItemDto();
        updateTodoItemDto.setTitle(todoItem.getTitle());

        when(todoItemRepository.findById(any(Long.class))).thenReturn(Optional.empty());

        assertThatExceptionOfType(EntityNotFoundException.class)
                .isThrownBy(() -> todoItemService.updateTitle(1L, updateTodoItemDto));
    }

    @Test
    void deleteTodoItem() {
        when(todoItemRepository.existsById(any(Long.class))).thenReturn(true);

        todoItemService.delete(todoItem.getId());

        verify(todoItemRepository, times(1)).deleteById(any(Long.class));
    }

    @Test
    void deleteTodoItem_NotFound() {
        when(todoItemRepository.existsById(any(Long.class))).thenReturn(false);

        assertThatExceptionOfType(EntityNotFoundException.class)
                .isThrownBy(() -> todoItemService.delete(1L));
    }

    @Test
    void toggleCompleted() {
        todoItem.setCompleted(false);

        when(todoItemRepository.findById(any(Long.class))).thenReturn(Optional.of(todoItem));
        when(todoItemRepository.saveAndFlush(any(TodoItem.class))).thenReturn(todoItem);

        var returnedTodoItem = todoItemService.toggleCompleted(todoItem.getId());

        assertThat(returnedTodoItem).isNotNull();
        assertThat(returnedTodoItem.getCompleted()).isEqualTo(true);
    }
}
