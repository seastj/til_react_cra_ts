import { TodoType } from '@/types/todoType';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
};
const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  // 수정은 별도의 입력창 구성으로 수정후 값만 업데이트
  const handleEdit = () => {
    console.log('내용수정');
    onEdit();
  };

  // CSS 객체 만들기
  const listyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    color: todo.completed ? 'gray' : 'red',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <li style={listyle}>
      <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
      <span>{todo.title}</span>
      <button onClick={handleEdit}>수정</button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
