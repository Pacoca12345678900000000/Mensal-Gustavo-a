import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [view, setView] = useState('register');

  useEffect(() => {
    setView('register');
  }, []);

  const showRegister = () => {
    setView('register');
  };

  const showDataBase = () => {
    setView('dataBase');
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>MENSAL .</p>
        </div>

        <div className="nav-menu">
          <ul>
            <li><a href="#" className="link active">Home</a></li>
            <li><a href="#" className="link">Blog</a></li>
            <li><a href="#" className="link">Services</a></li>
            <li><a href="#" className="link">About</a></li>
          </ul>
        </div>

        <div className="nav-button">
          <button className="btn white-btn" onClick={showRegister}>Sign Up</button>
          <button className="btn" onClick={showDataBase}>Data Base</button>
        </div>
      </nav>

      <div className="form-box">
        {view === 'register' && 
          <div className="register-container" id="register">
            <div className="top">
              <header>Sign Up</header>
            </div>

            <div className="two-forms">
              <div className="input-box">
                <i className="bx bx-user"></i>
                <input type="text" placeholder="First name" className="input-field" />
              </div>
              <div className="input-box">
                <i className="bx bx-user"></i>
                <input type="text" placeholder="Last name" className="input-field" />
              </div>
            </div>

            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>

            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check"> Remember Me</label>
              </div>
            </div>
          </div>
        }

        {view === 'dataBase' && (
          <div className="data-base" id="dataBase">
            <table>
              <caption>Users</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amanda</td>
                  <td>amanda@gmail.com</td>
                </tr>
                <tr>
                  <td>Bruno</td>
                  <td>bruno@gmail.com</td>
                </tr>
                <tr>
                  <td>Caio</td>
                  <td>caio@gmail.com</td>
                </tr>
                <tr>
                  <td>Eduarda</td>
                  <td>duda@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
