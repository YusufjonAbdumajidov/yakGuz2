import React from 'react';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div className='mainContainer'>
        <div className="coverBack"></div>
        <main>
          <Navbar />
          <div className="showcase">
            <p>Amu-Qashqadaryo irrigatsiya tizimlari havza boshqarmasi xuzuridagi</p>  
            <h1>Yakkabog-G’uzor irrigatsiya tizimi boshqarmasi</h1>
            <button > <a style={{textDecoration: "none"}} href="https://suvchi.gov.uz/uz" >Vazirlik rasmiy sayti</a> </button>
          </div>
          
        </main>
    </div>
  )
}

export default Main