import TodoForm from './components/molecules/todos/TodoForm';
import Todos from './components/molecules/todos/Todos';
import Layout from './components/pages/Layout';
import { TodoItem } from './types/TodoItem';

const todoItems: TodoItem[] = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false },
  { id: 4, title: 'Todo 4', completed: false },
  { id: 5, title: 'Todo 5', completed: false },
  { id: 6, title: 'Todo 6', completed: false },
  { id: 7, title: 'Todo 7', completed: false },
];

const App = () => (
  <Layout>
    <TodoForm />
    <Todos todoItems={todoItems} />
  </Layout>
);

export default App;
