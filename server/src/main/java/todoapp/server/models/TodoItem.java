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
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, length = 512)
    private String title;

    @Column(nullable = false)
    private Boolean completed;

    @Column(nullable = false, updatable = false)
    private Date creationDate;

    @Column()
    private Date updateDate;

    @PreUpdate
    public void preUpdate() {
        this.updateDate = new Date();
    }

    @PrePersist
    public void prePersist() {
        this.creationDate = new Date();
        this.completed = false;
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
