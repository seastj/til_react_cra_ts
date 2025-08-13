import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TodoType } from '../types/todoType';
import { useTodoActions } from '../context/todo/hooks';

const TodoWrite = () => {
  // js
  const { addTodo } = useTodoActions();
  // 할일 제목 값 관리
  const [title, setTitle] = useState<string>('');
  // title 변경시 onChange 이벤트 처리해보기
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  // 새 할일 등록하기
  const handleAdd = () => {
    if (title.trim()) {
      const newTodo: TodoType = {
        id: Date.now().toString(),
        title: title,
        completed: false,
      };
      addTodo(newTodo);

      setTitle('');
    }
  };

  // jsx
  return (
    <div>
      <input type="text" value={title} onChange={e => handleChange(e)} onKeyDown={handleKeyDown} />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
};

export default TodoWrite;
