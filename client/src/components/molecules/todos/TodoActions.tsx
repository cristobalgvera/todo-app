import Edition from '../../atoms/todos/Edition';
import Remove from '../../atoms/todos/Remove';

interface TodoActionsProps {
  onClickEdition: () => void;
  onRemove: () => void;
}

const TodoActions = ({ onClickEdition, onRemove }: TodoActionsProps) => {
  return (
    <div className="flex gap-x-3 text-text cursor-pointer transition-all duration-75 ease-in invisible group-hover:visible">
      <Edition onClick={onClickEdition} />
      <Remove onClick={onRemove} />
    </div>
  );
};

export default TodoActions;
