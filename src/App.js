import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from  './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'; 
import React from 'react'; 

const defaultTodos = [
  {
    text: 'Hacer las compras', completed: false
  },
  {
    text: 'Realizar el curso de Platzi', completed: true
  },
  {
    text: 'Limpiar la casa', completed: false
  },
  {
    text: 'Preparar el almuerzo', completed: true
  },
  {
    text: 'Alimentar al gato', completed: false
  },
  
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={2} total={5} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
