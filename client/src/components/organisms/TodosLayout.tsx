import { BounceLoader } from 'react-spinners';
import { useTodoApi } from '../../hooks/useTodoApi';
import Header from '../atoms/todos/Header';
import Container from '../atoms/ui/Container';
import Divider from '../atoms/ui/Divider';
import React from 'react';
import Scrollable from '../atoms/ui/Scrollable';
import AppLayout from '../common/AppLayout';
import TodoForm from '../molecules/todos/TodoForm';
import Todos from '../molecules/todos/Todos';

const TodosLayout = () => {
  const {
    data: { isLoading, isSuccess, isError },
  } = useTodoApi();

  return (
    <AppLayout>
      <Header />
      <Container>
        <TodoForm onSubmit={{ type: 'create' }} />
        <Divider />
        {isSuccess && (
          <Scrollable>
            <Todos />
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
