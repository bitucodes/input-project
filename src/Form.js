import React from 'react'
import { useState } from 'react';

function Form() { 
    const data = {name:""};
    const [inputData, setInputData] = useState(data)

    function handleData(e) {
    setInputData({...inputData, [e.target.name]: e.target.value})
    } 

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name) {
            alert ("All fields are mandatory")
        } else 
        alert ("Form Submitted Successfully")
    }
     
    return (
        <form className = "container" onSubmit = {handleSubmit}>
            <div className = "header">
                <h1>Registration Form</h1>
            </div>

            <div>
                <input type="text" placeholder = "Enter your name: " name = "name" value = {inputData.name} onChange = {handleData} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form;

