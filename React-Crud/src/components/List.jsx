import React, { useState } from 'react'

const List= () => {

const [name,setName] = useState('')
const [list,setList] = useState([])
const [editList,setEditList] = useState(null)

//Handle add or edit
const handleSubmit = (e) => {
    e.preventDefault();
    if (editList !== null) {
      const updatedUsers = [...list];
      updatedUsers[editList] = name;
      setList(updatedUsers);
      setEditList(null);
    } else {
      setList([...list, name]);
    }
    setName('');
  };

const handleEdit=(index) => {
    setName(list[index]);
    setEditList(index);
}

const handleDelete= (index) => {
    const filter=list.filter((_,i) => i!==index)
    setList(filter)
    if(index !== null){
        setName('')
    }
}

  return (
    <div className='box-content '> 
       
        <h1 className='mt-10 text-blue-500 text-center text-2xl font-bold'> To Do List </h1>
          <div className='m-5 flex justify-center border w-full h-30'>
            
        <form  className="m-3" id="f1" onSubmit={handleSubmit}>
            <input 
            className='border w-50 h-8 p-3 m-5'
            type="text" value={name} 
            placeholder='Enter today job'
            onChange={(e) => setName(e.target.value)} />
            <button  className="mt-10 border w-15 bg-red-900 h-8" type="submit">{editList !== null ? 'Update' : 'Save'}</button>
        </form>
        </div>
        <div className='m-5 border w-full h-100'>
            <h3 className='ms-3 text-lg underline'> Contents</h3>
            <ul className='ms-3'>
          {list.map((item, index) => (
            <li className="" key={index}>
              <button className=' w-50 h-8 mt-5 flex-none me-70'>{item}</button>
              {/*<button id="b2" className=''>{item.Email}</button> */}
              <button className="bg-blue-900 felx-1 w-20 h-8 mt-5 border px-2 me-1" onClick={() => handleEdit(index)}>Edit</button>
              <button className='bg-teal-900 flex-1  w-20 h-8 mt-5 border px-2 mt'onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
          
        </ul>
        </div>
        

    </div>
  )
}

export default List