import { useState } from 'react';
import TodoList from './todos/TodoList';
import TodoWrite from './todos/TodoWrite';

// 공통으로 사용하는 type 정의 및 interface 는 별도의 폴더에 보관한다.
import { ITodoType, TodoType } from './types/todoType';

// 테스트를 위한 목업 데이터 (/src/api/dummy.ts 추천)
const initialTodos: TodoType[] = [
  { id: 'a', title: '제목1', completed: false },
  { id: 'b', title: '제목2', completed: true },
  { id: 'c', title: '제목3', completed: false },
  { id: 'd', title: '제목4', completed: true },
  { id: 'e', title: '제목5', completed: false },
];

function App(): JSX.Element {
  // ts

  // {id : "", title : "", completed : false}
  const [todos, setTodos] = useState<(TodoType | ITodoType)[]>(initialTodos);
  const handleTodoUpdate = () => {
    // setTodos();
  };
  // todo 목록에서 실행할 함수들
  const onToggle: (id: string) => void = (id: string) => {
    console.log('onToggle: ', id);
    // 전달받은 ID 를 이용해서 map으로 찾은후 id가 같으면 completed 변경
    const arr: TodoType[] = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(arr);
  };
  const onDelete: (id: string) => void = (id: string) => {
    console.log('onDelete: ', id);
    // 전달받은 ID 를 제외한 나머지만 모아서 목록 변경
    const arr: TodoType[] = todos.filter(todo => todo.id !== id);
    setTodos(arr);
  };
  const onEdit: () => void = () => {
    console.log('onEdit');
  };

  // tsx
  return (
    <div>
      <h1>할일 앱서비스</h1>
      <div>
        <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default App;
