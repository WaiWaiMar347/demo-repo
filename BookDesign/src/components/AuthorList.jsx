import React, { useEffect, useState } from 'react';
//import axios from 'axios';

const AuthorList = () => {
  //const [authors, setAuthors] = useState([]);

  

  
    


  return (
    <div className='mt-10 p-6 max-w-md mx-auto bg-white items-center space-x-4 '>
      <h2 className='text-lg font-semibold border-b'>Authors</h2>
      <ul >
        {authors.map(author => (
          
          <li key={author._id} className='flex justify-between items-center mt-5 pb-2'>
            <div>{author.name}</div>
           
           <div>
           <button className=" border  px-2 me-3" onClick={() => updateAuthor(author._id,)}>
          Update
         </button>
         <button className='border  px-2 'onClick={() => deleteAuthor(author._id)}>
          Delete
         </button>
        </div>

           </li>
           
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
