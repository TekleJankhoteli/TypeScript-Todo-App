import React, { useState,useEffect } from 'react';
import { styled } from "styled-components";

import TodoForm from './TodoForm';
import TodoList from './TodoList';


import blueDot from "./assets/blueDot.png";
import greenDot from "./assets/greenDot.png";
import redDot from "./assets/redDot.png";
import whiteDot from "./assets/whiteDot.png";


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

  const [todoes, setTodos] = useState<{text:string; date:string;done:boolean; image:string}[]>([]);

  const rendomImages=[blueDot,greenDot,redDot,whiteDot];
  
  useEffect(()=>{
    const savedTodos=JSON.parse(localStorage.getItem('todoes')||"[]");
    setTodos(savedTodos)
  }, [])



  const addTodoFunction = (newTodo: string) => {

    if (newTodo.trim() !== '') {
      const date = new Date();
      const formattedDate = `${date.getDate().toString().padStart(2, '0')} ${date.toLocaleString('default', { month: 'short' })}`;
      const randomImage = rendomImages[Math.floor(Math.random() * rendomImages.length)];
      const newTask = { text: newTodo, date: formattedDate, done:false, image:randomImage };
      setTodos([newTask,...todoes ]);

      localStorage.setItem('todoes', JSON.stringify([newTask, ...todoes]))
    }
  };


  const toggleTodoDone = (index: number) => {
    const updatedTodos = [...todoes];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);

    localStorage.setItem('todoes', JSON.stringify(updatedTodos))
  };

  
  const deleteTodo=(index:number)=>{
    const updateTodos=[...todoes];
    updateTodos.splice(index, 1)
    setTodos(updateTodos)

    localStorage.setItem('todoes', JSON.stringify(updateTodos))
  }

  return (
   <Container>

      <TodoForm addTodoFunction={addTodoFunction} />
      <TodoList todos={todoes} toggleTodoDone={toggleTodoDone} deleteTodo={deleteTodo}/>

    </Container>
  );
}

export default App;
