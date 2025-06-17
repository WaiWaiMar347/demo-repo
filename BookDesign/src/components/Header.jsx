//import { Router } from 'express'
import React from 'react'
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Book from './Book'
import Author from './Author'
import Category from './Category'



const Header = () => {
  return (
    
    <Router>
      <div className="p-4 bg-gray-100">
        <nav className="flex justify-center space-x-35 font-semibold text-gray-700 text-center">
          <Link to="/book" className="hover:text-blue-600"> Book </Link> 
          <Link to="/author" className="hover:text-blue-600"> Author</Link>
          <Link to="/category" className="hover:text-blue-600"> Category </Link>
        </nav>

        <Routes>
          <Route path="/book" element={<Book />} />
          <Route path="/author" element={<Author />} />
          <Route path="/category" element={<Category />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default Header