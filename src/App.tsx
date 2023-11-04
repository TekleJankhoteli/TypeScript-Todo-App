import React, { useState } from 'react';

import { styled } from "styled-components";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Container=styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F8F8F8;
  `;

function App() {
 const [todoes,setTodos]=useState<string[]>([]);


 const addTodoFunction=(newTodo:string)=>{
  setTodos([...todoes,newTodo])
 }

  return (
   <Container>

      <TodoForm addTodoFunction={addTodoFunction} />
      <TodoList todoes={todoes}/>

    </Container>
  );
}

export default App;
