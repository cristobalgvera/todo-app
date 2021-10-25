import { BounceLoader } from 'react-spinners';
import { useTodoApi } from '../../hooks/useTodoApi';
import Divider from '../atoms/ui/Divider';
import Scrollable from '../atoms/ui/Scrollable';
import AppLayout from '../common/AppLayout';
import TodoForm from '../molecules/todos/TodoForm';
import Todos from '../molecules/todos/Todos';

const TodosLayout = () => {
  const {
    data: { todos, isLoading, isSuccess },
    actions: {
      handleAddTodo,
      handleDeleteTodo,
      handleEditTodo,
      handleToggleTodo,
    },
  } = useTodoApi();

  return (
    <AppLayout>
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
      <BounceLoader size={50} color={'#fdbdb6'} loading={isLoading} />
    </AppLayout>
  );
};

export default TodosLayout;
