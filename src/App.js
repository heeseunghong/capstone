import logo from './logo.svg';
import React from 'react';
import{ BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Map from './pages/Map';
import Notice from './pages/Notice';
import Communication from './pages/Communication';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Write from './pages/Write';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Myblog from './pages/Myblog';
import Myreview from './pages/Myreview';
import Mylist from './pages/Mylist';
import Membership from './pages/membership';
import Searchf from './pages/Searchf';

function App() {
  return (
    
    <div className='App'>
    <div className="Wrapper">
     <BrowserRouter>
    
        <Header />
        <Nav />
      
        
        <Routes>
       
          <Route path="/"element={<Main />} />
          <Route path="/Map"element={<Map />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Login"element={<Login />} />
          <Route path="/Write"element={<Write />} />
          <Route path="/Communication"element={<Communication />} />
          <Route path="/Myblog" element={ <div><Myblog/></div> } />
          <Route path="/Myreview" element={ <div><Myreview/></div> } />
          <Route path="/Mylist" element={ <div><Mylist/></div> } />
          <Route path="/Membership" element={ <div><Membership/></div> } />
          <Route path="/Searchf" element={ <div><Searchf/></div> } />
        


        </Routes>
        <Footer />
        </BrowserRouter>
        
        </div>
      </div>
    



  );
  
}



export default App;

