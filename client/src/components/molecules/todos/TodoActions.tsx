import Edition from '../../atoms/todos/Edition';
import Delete from '../../atoms/todos/Delete';

interface TodoActionsProps {
  onClickEdition: () => void;
  onDelete: () => void;
}

const TodoActions = ({ onClickEdition, onDelete }: TodoActionsProps) => {
  return (
    <div className="flex gap-x-3 text-text cursor-pointer transition-all duration-75 ease-in invisible group-hover:visible">
      <Edition onClick={onClickEdition} />
      <Delete onClick={onDelete} />
    </div>
  );
};

export default TodoActions;
