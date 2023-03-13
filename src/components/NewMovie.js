import React from 'react'
import { useState } from 'react'


const NewMovie = () => {

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [date, setDate] = useState('');

    const addMovie = (e) => {
        e.preventDefault();
        if(!title || !director || !date){
            alert('Please fill in all fields');
            return;
        }
        console.log(title, director, date)
    }
  return (
    <form onSubmit={addMovie}>
        <div className='form-control'>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Add Task' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label htmlFor="">Director</label>
            <input type="text" placeholder='Add Task' value={director} onChange={(e)=>{setDirector(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label htmlFor="">Date</label>
            <input type="date" placeholder='Add Task' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        </div>

        <input type='submit' value='Add Movie' className='btn btn-block'/>
    </form>
  )
}

export default NewMovie