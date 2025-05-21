import React, { use, useState } from 'react'
import RecordList from './RecordList'

const List= () => {

const [name,setName] = useState('')
const [list,setList] = useState([])
const [editList,setEditList] = useState(null)
const [checkedItems, setCheckedItems] = useState({});

//const [check, setCheck] = useState(false);
//const [checkId,setCheckId]=useState([]);

//Handle add or edit
const handleSubmit = (e) => {
    e.preventDefault();
    //let i=0
    if (editList !== null) {
      const updatedUsers = [...list];
      updatedUsers[editList] = name;
      setList(updatedUsers);
      setEditList(null);
    } else {
      //setCheck(false);
       setList([...list, name]);
      //setCheckId([...checkId,ch])
      //setCheck(false)
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
      const updatedCheckedItems = { ...checkedItems };
    delete updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

        setName('')
    }
}

const handleCheckboxChange = (index) => {
   
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]  //prev = { 0: true, 1: false } index = 1 

    }));
  };

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
        
        <RecordList 
        list={list} 
        handleSubmit={handleSubmit} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}/>

    </div>
  )
}

export default List