import { createRef } from 'react';
import Button from '../../atoms/forms/Button';
import Input from '../../atoms/forms/Input';

const TodoForm = () => {
  const inputRef = createRef<HTMLInputElement>();

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    // TODO: Add todo to database
    console.log(inputRef.current?.value);
  };

  return (
    <form onSubmit={handleAddTodo} className="flex gap-x-3">
      <Input ref={inputRef} />
      <Button>Add</Button>
    </form>
  );
};

export default TodoForm;
