import React, { useState } from 'react';
import { styled } from "styled-components";
import Checkbox from "./assets/checkbox.png";
import CheckboxDone from "./assets/checkboxDone.png";
import blueDot from "./assets/blueDot.png";
import greenDot from "./assets/greenDot.png";
import redDot from "./assets/redDot.png";
import whiteDot from "./assets/whiteDot.png";



const rendomImages=[blueDot,greenDot,redDot,whiteDot];



const TodoListContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:15px;
width:650px;
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


const TodoList = ({ todos }: { todos: { text: string; date: string }[] }) => {
  return (
    <TodoListContainer>
      {todos.map((task, index) => (
        <TodoListItems key={index}>
       <img style={{ paddingLeft: '10px' }} src={Checkbox} alt="" />
          <p>{task.text}</p>
          <TimeStamp className='date'>{task.date}</TimeStamp>
        <img style={{ paddingRight: '10px' }} src={rendomImages[Math.floor(Math.random() * rendomImages.length)]} alt="" />
        </TodoListItems>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;