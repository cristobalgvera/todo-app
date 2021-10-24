import { createRef } from 'react';
import Button from '../../atoms/forms/Button';
import Input from '../../atoms/forms/Input';

interface TodoFormProps {
  handleAddTodo: (todo: string) => void;
}

const TodoForm = ({ handleAddTodo }: TodoFormProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value) handleAddTodo(inputRef.current.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-x-3">
      <Input ref={inputRef} placeholder="Your To-do" />
      <Button>Add</Button>
    </form>
  );
};

export default TodoForm;
