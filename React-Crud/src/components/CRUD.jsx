import React,{useState} from 'react'

const CRUD= () => {

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [arrayList,setArray] = useState([]);
  //const [showList, setShowList] = useState(false);
  const [editItem, setEditItem] = useState(null);
 // const [editEmail, setEditEmail] = useState('');




  const arrayAdd = (e) => {
    e.preventDefault();
      const list={
      Name:name,
      Email:email}
    if(editItem !== null){
      const updateItem=[...arrayList]
      updateItem[editItem]=list;
      setArray(updateItem)
        setEditItem(null);
        setName('')
        setEmail('')
      

    }
    else {
      setArray([...arrayList,list]);
      setName('');
      setEmail(''); }
  }

  
  /*{const showArray=()=>{
    //console.log("Start")
    <ul>
          {arrayList.map((item, index) => (
            <li key={index}>
              <strong>{item.Name}</strong> - {item.Email}
            </li>
          ))}
        </ul>
     }}*/
    
    const  handleEdit = (index) => {
    const item={...arrayList[index]}
    setEditItem(index)
    setName(item.Name),
    setEmail(item.Email);
    
    
   
  };
    const handleDelete = (index) => {
    const filter= arrayList.filter((_, i) => i !== index);
    setArray(filter);
    if (index !== null) {
      setName('');
      setEmail('');
  }
}


  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 ,maxleft:20}}>
      <h2>Set-like CRUD Form</h2>
      <form  id="f1" onSubmit={arrayAdd}> 
      <input
        className="border"
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className='border'
        type="text"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
        <br></br>    
        <button  type="submit" className="border" > {editItem !==null? 'Update':'Add'}</button>
       </form>
      
          <ul>
          {arrayList.map((item, index) => (
            <li key={index}>
              <button id="b1" className=''>{item.Name}</button>
              <button id="b2" className=''>{item.Email}</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>

  
        
      
      
  
      </div>
  )
}

export default CRUD