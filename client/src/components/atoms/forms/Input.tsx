import { forwardRef } from 'react';

interface InputProps {
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => (
    <div className="flex gap-x-2 items-center">
      <span className="font-bold text-2xl text-primary-base">&gt;</span>
      <input
        ref={ref}
        className="p-2 w-72 border-b border-primary-base focus:border focus:border-primary-base focus:outline-none focus:rounded"
        placeholder={placeholder}
      />
    </div>
  ),
);

export default Input;
