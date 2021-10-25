package todoapp.server.dtos.todoitem;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public abstract class UpsertTodoItemDto {
    @ApiModelProperty(
            notes = "To-do principal title",
            required = true,
            example = "Study at least two hours of programming every day"
    )
    @NotNull
    @NotBlank
    @Size(min = 2, max = 512)
    protected String title;
}
