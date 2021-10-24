package todoapp.server.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class TodoItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "identificador", nullable = false)
    private Long id;

    @Column(name = "descripción", nullable = false, length = 512)
    private String title;

    @Column(name = "vigente", nullable = false)
    private Boolean completed;

    @Column(name = "fechacreación", nullable = false, updatable = false)
    private Date creationDate;

    @Column(name = "fechaactualización")
    private Date updateDate;

    @PreUpdate
    public void preUpdate() {
        updateDate = new Date();
    }

    @PrePersist
    public void prePersist() {
        creationDate = new Date();
        completed = false;
    }

    public void toggleCompleted() {
        completed = !completed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        TodoItem todoItem = (TodoItem) o;
        return id != null && Objects.equals(id, todoItem.id);
    }

    @Override
    public int hashCode() {
        return 0;
    }
}
