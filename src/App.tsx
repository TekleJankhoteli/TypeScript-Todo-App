import React, { useState } from 'react';

import { styled } from "styled-components";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Container=styled.div`
display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 100vh;
  background-color: #F8F8F8;
  `;

function App() {
  const [todoes, setTodos] = useState<{text:string; date:string}[]>([]);


  const addTodoFunction = (newTodo: string) => {
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')} ${date.toLocaleString('default', { month: 'short' })}`;
    const newTask = {text:newTodo, date:formattedDate}
    setTodos([...todoes, newTask]);
  };

  return (
   <Container>

      <TodoForm addTodoFunction={addTodoFunction} />
      <TodoList todos={todoes}/>

    </Container>
  );
}

export default App;
