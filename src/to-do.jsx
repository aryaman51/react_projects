import React, { useState } from 'react';

export default function ToDoCard() {
  const [obj, setObj] = useState({
    time: '',
    task: ''
  });
  const [inputValue, setInputValue] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setObj((obj) => ({
      ...obj,
      [name]: value
    }));
  }

  function handleClick() {
    setInputValue([...inputValue, { task: obj.task, time: obj.time }]);
    setObj({ time: '', task: '' });
  }

  return (
    <div className='p-4'>
      <h1 className="mb-4 text-center font-serif text-2xl">Enter your to-do's here</h1>
      <div className='p-1 m-1 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center items-center'>
        <input
          className='border rounded-md p-2'
          placeholder="walk your dog"
          name="task"
          value={obj.task}
          onChange={handleChange}
        />
        <input
          className='border rounded-md p-2'
          placeholder="00:00"
          name="time"
          value={obj.time}
          onChange={handleChange}
        />
        <button
          className='bg-zinc-700 border rounded-md p-2 text-sm text-white'
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      
      <div>
        <ul>
          {inputValue.map((item, index) => (
            <li key={index}>{item.task} by {item.time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
