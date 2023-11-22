// App.js
// import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import AdminScreen from './components/AdminScreen';
import ClientScreen from './components/ClientScreen';
import './assets/styles.css';
import './App.css'

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <div className="container">
        <LeftSidebar />
        <AdminScreen /> 
        {/* For demonstration purpose */}
        {/* Uncomment below for Client Screen */}
        {/* <ClientScreen /> */}
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
