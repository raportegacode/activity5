import './App.css';
import React, { useState } from 'react'
import Login from './component/login.js';
import Register from './component/register.js';
import image1 from './image/Activity5-SS1.png'
import image2 from './image/Activity5-SS2.png'
import image3 from './image/Activity5-SS3.png'
import image4 from './image/Activity5-SS4.png'
import image5 from './image/Activity5-SS5.png'
const accounts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'johndoe@example.com',
    password: 'password',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    email: 'janedoe@example.com',
    password: 'password',
  },
];
const images = [image1, image2, image3, image4, image5];
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [users, setUsers] = useState(accounts);
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div className='form-cont'>

        {
          currentForm === "login" ?
            <Login
              onFormSwitch={toggleForm}
              users={users}
              setUser={setUsers}
            />
            :
            <Register
              onFormSwitch={toggleForm}
              users={users}
              setUsers={setUsers}
            />
        }

        <div className='portfolio-container'>
          <ul className='list'>
            <li>
              Gab & Kate e-commerce website
            </li>
            <li>
              Pizza Shop POS

            </li>
            Attendance Roll Call
            <li>

              Wake Me App UI
            </li>
            <li>
              Medcure Pharmacy Management System

            </li>
            <li>
              Graphics and Content Creations
            </li>
          </ul>

          <div className='portfolio-img'>
            <img className='imageport' src={image1}></img>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
