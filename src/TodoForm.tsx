import React, { useState } from 'react';
import { styled } from "styled-components";


const Form=styled.form`
display:flex;
align-items:center;
justify-content:center;
width:650px;
margin-bottom:20px;

// Responsive

  @media (max-width: 767px) {
   
    width: 370px; 
  
  }

`;

const Input=styled.input`
width: 517px;
height: 48px;
border-radius: 12px;
background: #E5E5E7;
border:none;
padding-left:15px;


// Responsive

  @media (max-width: 767px) {
   
    width: 300px; 
  
  }

`;



const TodoForm=({addTodoFunction}:{addTodoFunction:(newTodo:string)=> void})=>{

    const [inputText,setInputText]=useState('');

    const functionForInputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputText(e.target.value)
        
    }

    const handleFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addTodoFunction(inputText); 
        setInputText('');
    }

  

    return(
 
<Form onSubmit={handleFormSubmit}>
    <Input
    type="text"
    placeholder="Create new task"
    value={inputText}
    onChange={functionForInputChange}
    />
</Form>

    )
}

export default TodoForm;