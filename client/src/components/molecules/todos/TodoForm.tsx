import { createRef, useEffect } from 'react';
import Button from '../../atoms/forms/Button';
import Input from '../../atoms/forms/Input';

interface TodoFormProps {
  buttonText?: string;
  placeholder?: string;
  value?: string;
  onSubmit: OnSubmit;
}

type OnSubmit =
  | {
      currentTodoId: number;
      handleUpdate: (id: number, todo: string) => void;
      cancelEditing: () => void;
    }
  | { handleCreate: (todo: string) => void };

const TodoForm = ({
  onSubmit,
  value,
  buttonText = 'Add',
  placeholder = 'Your To-do',
}: TodoFormProps) => {
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && 'cancelEditing' in onSubmit) {
        onSubmit.cancelEditing();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [onSubmit]);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    const todo = inputRef.current.value.trim();

    if ('handleCreate' in onSubmit) {
      onSubmit.handleCreate(todo);
      return;
    }

    const { currentTodoId, handleUpdate } = onSubmit;
    handleUpdate(currentTodoId, todo);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-x-3">
      <Input ref={inputRef} value={value} placeholder={placeholder} />
      <Button>{buttonText}</Button>
    </form>
  );
};

export default TodoForm;
