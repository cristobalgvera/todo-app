import { BounceLoader } from 'react-spinners';
import { useTodoApi } from '../../hooks/useTodoApi';
import Header from '../atoms/todos/Header';
import Container from '../atoms/ui/Container';
import Divider from '../atoms/ui/Divider';
import Scrollable from '../atoms/ui/Scrollable';
import AppLayout from '../common/AppLayout';
import TodoForm from '../molecules/todos/TodoForm';
import Todos from '../molecules/todos/Todos';

const TodosLayout = () => {
  const {
    data: { todos, isLoading, isSuccess, isError },
    actions: {
      handleAddTodo,
      handleDeleteTodo,
      handleEditTodo,
      handleToggleTodo,
    },
  } = useTodoApi();

  return (
    <AppLayout>
      <Header />
      <Container>
        <TodoForm onSubmit={{ handleCreate: handleAddTodo }} />
        <Divider />
        {isSuccess && (
          <Scrollable>
            <Todos
              todos={todos ?? []}
              onToggle={handleToggleTodo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            />
          </Scrollable>
        )}
        {isError && (
          <span className="font-bold text-secondary-600">
            Error fetching data, try refreshing the page
          </span>
        )}
        <BounceLoader size={50} color="#fdbdb6" loading={isLoading} />
      </Container>
    </AppLayout>
  );
};

export default TodosLayout;
