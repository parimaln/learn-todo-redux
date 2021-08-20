import React from 'react';
import { Todo } from './features/todo/Todo';

function App() {
  return (
    <div >
      <header>
        <Todo />
        <p>
          Use buttons to add or delete Todos
        </p>
      </header>
    </div>
  );
}

export default App;
