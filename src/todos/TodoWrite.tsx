import { TodoType } from '../types/todoType';

type TodoWirteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: () => void;
};

const TodoWrite = ({ setTodos, handleTodoUpdate }: TodoWirteProps) => {
  return <div>TodoWrite</div>;
};

export default TodoWrite;
