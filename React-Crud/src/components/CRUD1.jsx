import React,{useState} from 'react'

const CRUD1 = () => {


   const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Handle add or update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = name;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName('');
  };

  // Handle edit
  const handleEdit = (index) => {
    setName(users[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    if (editIndex === index) {
      setEditIndex(null);
      setName('');
    }
  };
  return (
    <div>
      <h2>Simple CRUD with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default CRUD1