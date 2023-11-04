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
flex-direction:column;
gap:15px;

width:650px;
`;

const TodoListItems=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width: 517px;
height:35px;
border-radius: 8px;
background: #FFF;
padding-left:15px;
padding-right:15px;
color: #000;
font-size: 16px;
`;

const TimeStamp=styled.p`
color: #80848A;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 8px;
background: rgba(160, 172, 231, 0.10);
`;
const TodoList=({todoes}:{todoes:string[]})=>{
 
  
    return(
      <TodoListContainer>

     {todoes.map((i,index)=>(
      <TodoListItems key={index}>
        <img src={Checkbox} alt="" />
        {i}
       <TimeStamp className='date'>
       
       </TimeStamp>
        <img src={rendomImages[Math.floor(Math.random() * rendomImages.length)]} alt="" />
        </TodoListItems>
     ))} 

      </TodoListContainer>
       
       
     
    )
}

export default TodoList;