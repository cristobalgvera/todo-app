import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>((_, ref) => <input ref={ref} />);

export default Input;
