import React from 'react';
import '../stylesheets/homework.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'



function Homework({ text, completed }){
    return (
        <div className={completed ? 'homework-container completed' : 'homework-container'} >
            <div className='homework-text' >
                {text}
            </div>

            <div className='homework-icons-container' >
                <AiOutlineCloseCircle className='homework-icon' />
            </div>
        </div>
    );
}

export default Homework;