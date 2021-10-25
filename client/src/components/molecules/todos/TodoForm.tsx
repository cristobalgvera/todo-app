import React, { createRef, useEffect } from 'react';
import { useTodoApi } from '../../../hooks/useTodoApi';
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
      type: 'create';
    }
  | {
      type: 'update';
      currentTodoId: number;
      cancelEditing: () => void;
    };

const TodoForm = ({
  onSubmit,
  value,
  buttonText = 'Add',
  placeholder = 'Your To-do',
}: TodoFormProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const {
    actions: { handleAddTodo, handleEditTodo },
  } = useTodoApi();

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

    const todoTitle = inputRef.current.value.trim();

    switch (onSubmit.type) {
      case 'create':
        handleAddTodo(todoTitle);
        break;
      case 'update':
        handleEditTodo(onSubmit.currentTodoId, todoTitle).then(() =>
          onSubmit.cancelEditing(),
        );
        break;
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-x-3">
      <Input ref={inputRef} value={value} placeholder={placeholder} />
      <Button>{buttonText}</Button>
    </form>
  );
};

export default TodoForm;
