import React from 'react'
//import MyImage from '../assets/wwm.jpeg'


const TwoGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-2 border h-screen'>
        <div className='w-80 bg-green-100'>
            <p className='50 h-50'> <img  className='ms-10  mt-3 size-40 rounded-full' src="/wwm.jpeg" alt="Description of image" /></p>
            <p className='px-15'>
              <h1 className='mt-3 text-xl font-bold'>Profile</h1>
              Computer Science Student.<br/>
              I considered myself a responsible and orderly person.<br/>
              I am learning React Front-end Design and taking experience in real Work<br/>
            </p>
            <p className='px-15'>
              <h1 className='mt-3  font-bold text-xl'>Contact Me</h1>
              <label> (+959)977231522</label> <br/>
              <label className='text-blue-600 underline'> 
                <a href="waimarsagaing2@gmail.com">waimarsagaing2@gmail.com</a>
                 </label><br/>
              <label> Mandalay Township<br/>81 Street & Between 30&31 </label>
            </p>
        </div>
        <div className='bg-yellow-200 ms-0'>
            <h1 className=' w-50 h-50 text-xl font-bold mt-8'>Wai Wai Mar</h1>
            <ul className='list-none mt-3  font-bold text-xl'>
              <li class="relative pl-6 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-indigo-600 before:rounded-sm before:content-['✔']">Education</li>
              <p><label>COMPUTER UNIVERSITY</label><br/>
              Computer Science Student<br/>
              
              </p>
              <li class="relative pl-6 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-indigo-600 before:rounded-sm before:content-['✔']">Language</li>
              <p>Native English<br/>
              Japanese N5</p>
              <li class="relative pl-6 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-indigo-600 before:rounded-sm before:content-['✔']">Computer Skills</li>
             <p> Microsoft Office<br/>
              Html<br/>
              Java Script<br/></p>
              <li class="relative pl-6 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-indigo-600 before:rounded-sm before:content-['✔']">Volunteer Experience</li>
               <p><label>Project Show</label><br/>
               Participation in teamwork</p>
            </ul>
              
            
        </div>
    </div>
  )
}

export default TwoGrid