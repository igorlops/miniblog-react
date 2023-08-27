import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//context
import { AuthProvider, useAuthValue } from './context/AuthContext';

// hooks
import { useState,useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost'
// pages

function App() {

  const [user,setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[auth])
  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">

      <AuthProvider value={{user}}>
        <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path="/post/:id" element={<Post/>}></Route>
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
              <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}></Route>
              <Route path='/post/edit/:id' element={user ? <EditPost/> : <Navigate to="/login"/>}></Route>
              <Route path='/post/create' element={user ? <CreatePost/> : <Navigate to="/login"/>}></Route>
              <Route path='/dashboard' element={user ? <Dashboard/>  : <Navigate to="/login"/>}></Route>
              
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
