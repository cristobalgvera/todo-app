import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import TodosLayout from './components/organisms/TodosLayout';
import { todosApi } from './context/stores/todoStore';

const App = () => (
  <ApiProvider api={todosApi}>
    <TodosLayout />
  </ApiProvider>
);

export default App;
