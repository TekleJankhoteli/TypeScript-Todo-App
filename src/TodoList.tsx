import React, { useState } from 'react';
import { styled } from "styled-components";
import Checkbox from "./assets/checkbox.png";
import CheckboxDone from "./assets/checkboxDone.png";


const TodoListContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:15px;
width:650px;

// Responsive

  @media (max-width: 767px) {
   
    width: 370px; 
  
  }

`;

const TodoListItems=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 530px;
height:35px;
border-radius: 8px;
background: #FFF;
overflow: hidden;
color: #000;
font-size: 16px;
cursor: pointer;

// Responsive

  @media (max-width: 767px) {
   
    width: 300px; 
  
  }



&:hover .date {
  opacity: 1;
}
`;

const TimeStamp=styled.p`
color: #80848A;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 8px;
background: rgba(160, 172, 231, 0.10);
opacity: 0; 
transition: opacity 0.3s;
`;

const Task=styled.p`
font-size:16px;
`



const TodoList = ({ todos,toggleTodoDone,deleteTodo }: { todos: { text: string; date: string; done:boolean; image:string }[],toggleTodoDone: (index:number)=>void,deleteTodo:(index:number) =>void}) => {

  
  return (
    <TodoListContainer>

      {todos.map((task, index) => (
        <TodoListItems key={index} >

       <img style={{ paddingLeft: '10px' }} src={task.done? CheckboxDone: Checkbox } alt="" onClick={() => toggleTodoDone(index)} />

          <Task className={task.done? "DoneToDo" : " "}>{task.text}</Task>

          <TimeStamp className='date'>{task.date}</TimeStamp>
          
        <img style={{ paddingRight: '10px' }} src={task.image} onClick={()=>deleteTodo(index)} alt="" />

        </TodoListItems>
      ))}

    </TodoListContainer>
  );
};

export default TodoList;