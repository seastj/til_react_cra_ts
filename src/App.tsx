import { TodoProvider } from './context/todo/TodoProvider';
import TodoList from './todos/TodoList';
import TodoWrite from './todos/TodoWrite';

function App(): JSX.Element {
  // ts

  // tsx
  return (
    <TodoProvider>
      <div>
        <h1>할일 앱서비스</h1>
        <div>
          <TodoWrite />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
