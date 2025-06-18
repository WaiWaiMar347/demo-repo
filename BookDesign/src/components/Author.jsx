import React, { useEffect, useState } from 'react';
//import AuthorList from './AuthorList';
import axios from 'axios';


const Author = () => {
  const API_URL = 'http://localhost:5000/author';

   const [authors, setAuthors] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);

  //READ authors
  const fetchAuthors = () => {
    axios.get(API_URL)
      .then(res => setAuthors(res.data))
      .catch(err => console.error('Error fetching authors:', err));
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

   const createAuthor = async () => {
    
   
    try {
      const response = await axios.post(API_URL, { name });
      // Assuming setAuthors is a function to update the list of authors
      // setAuthors(prevAuthors => [...prevAuthors, response.data]);
      setName('');
    } catch (err) {
      console.error('Error creating author:', err);
      
    } 
  };

  // UPDATE author
  const updateAuthor = () => {
    axios.put(`${API_URL}/${editingId}`, { name })
      .then(res => {
        setAuthors(authors.map(author =>
          author.id === editingId ? res.data : author
        ));
        setName('');
        setEditingId(null);
      })
      .catch(err => console.error('Error updating author:', err.name));
  };

  // 🗑️ DELETE author
  const deleteAuthor = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setAuthors(authors.filter(author => author.id !== id));
      })
      .catch(err => console.error('Error deleting author:', err));
  };

  // Handle submit (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingId){
      updateAuthor() } 
    else {
      createAuthor() } 
  };

  // Start editing
  const editAuthor = (author) => {
    setName(author.name);
    setEditingId(author.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex justify-center mt-10 p-6 max-w-md mx-auto bg-white items-center space-x-4 '>
        <input
        className='border'
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
        
        />
        <button type="submit" className='border'>
          {editingId ? 'Update' : 'Create'} 
        </button>
      </form>

      <div className='mt-10 p-6 max-w-md mx-auto bg-white items-center space-x-4 '>
        <h2 className='text-lg font-semibold border-b text-center'>
          Authors List
        </h2>
      <ul>
        {authors.map(author => (
          <li key={author._id} className='flex justify-between items-center mt-5 p-2'>
           <div>{author.name}</div> 
           <div className=''>
            <button onClick={() => editAuthor(author)} className='border me-3'>Edit</button>
            <button onClick={() => deleteAuthor(author._id)} className='border'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
};

export default Author;
