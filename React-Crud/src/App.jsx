import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
//import './App.css'
//import CRUD from './components/CRUD'
//import Update from './components/Update'
//import CRUD1 from './components/CRUD1'
//import Today from './components/List'
//import List from './components/List'
//import MyChild from './components/MyChild'
//import { UserContext } from './components/MyContext'


function App() {
  //const [user,setUser] = useState('Wai Mar')

  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  //const PrivateRoute = ({ isAuthenticated, children }) => {
  //return isAuthenticated ? children : <Navigate to="/login" />;
//};

  return (
      
      <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/login">Login</Link>
        </nav>
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/dashboard"
            element={
             // <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard/>
              //</PrivateRoute>
            }
          />
          <Route path="*" element={<h2>❌ 404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
    
  )

  {/*<>
     {/* <CRUD1/> 
     <CRUD/> 
     <List/> 

     {/*<MyContext>
     <MyChild/>
     </MyContext>

     </> 
     */}
}

export default App
