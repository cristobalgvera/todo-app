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
      <h1 className="font-bold text-6xl mb-3 text-secondary-500">
        To-do{' '}
        <span className="text-primary-base animate-pulse border-b-2 border-quaternary-700">
          app
        </span>
      </h1>
      <div className="p-6 rounded bg-quaternary-300 flex flex-col justify-center items-center">
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
      </div>
    </AppLayout>
  );
};

export default TodosLayout;
