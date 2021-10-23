import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>((_, ref) => (
  <div className="flex gap-x-2 items-center">
    <span className="font-bold text-2xl text-primary-base">&gt;</span>
    <input
      ref={ref}
      className="p-2 border-b border-primary-base focus:border focus:border-primary-base focus:outline-none focus:rounded"
    />
  </div>
));

export default Input;
