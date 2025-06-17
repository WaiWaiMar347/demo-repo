import { useState } from 'react';
import AuthorList from './AuthorList';

const Author = () => {
  const [author, setAuthor] = useState('');

  const handleSubmit = async () => {
    console.log(author);
    try {
    const response = await fetch('http://localhost:5000/author', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: author }),
    });

    if (!response.ok) {
      throw new Error('Failed to create author');
    }

    const data = await response.json();
    console.log('Author submitted:', data);

    // Optional: clear input after submission
    setAuthor('');
  } catch (error) {
    console.error('Error submitting author:', error);
  }
    // You can add logic here to update UI or state if needed
  };

  return (
    <div className="text-center mt-10">
      <div>
      <input
        id="a1"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author Name"
        className="border border-gray-300 p-2 me-3"
      />
      <button
        className="border border-gray-300 p-2 me-3"
        onClick={handleSubmit}
      >
        Add
      </button>
      </div>
      <AuthorList/>
      

    </div>
  );
};

export default Author;
