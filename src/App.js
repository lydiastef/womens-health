import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import mainImage from './images/women2.avif';

function App() {
  return (
      <div className="App">
          <Navbar />
          <main className="main-content">
              <div className="image-container">
                  <img src={mainImage} alt="Main" className="main-image" />
              </div>
              <div className="welcome-text">
                  <h1>Welcome to MyApp</h1>
                  <p>This is a sample welcome text that accompanies the main image. Customize this as needed to fit your content.</p>
              </div>
          </main>
      </div>
  );
}


export default App;
