import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItem = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>

            <img src={isComplete ? tick : not_tick} alt='Tick' className='w-7'/>
            <p className={`text-slate-500 ml-4 text-[17px] decoration-slate-500
              ${isComplete ? "line-through" : ""}`}>
                {text}</p>
        </div>
        <img onClick={() =>{deleteTodo(id)}}  src={delete_icon} alt='Delete' className='w-4 h-4 cursor-pointer'/>
    </div>
  )
}

export default TodoItem
