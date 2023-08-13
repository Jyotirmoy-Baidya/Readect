import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Poems from './pages/Poems';
import SinglePoem from './pages/SinglePoem';
import Navs from './components/Navs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import UpdatePoemContent from './components/UpdatePoemContent';
import UploadPoem from './pages/UploadPoem';
import ProfilePage from './pages/ProfilePage';

const GetProfileAPI = "/api/v1/reader";

const App = () => {
  useEffect(() => {
    checkLogin(GetProfileAPI);
  }, [])
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Registration />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/poems" element={<Poems />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/singlepoem/:id" element={<SinglePoem />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/updatePoem/:fieldName/:poemId" element={<UpdatePoemContent />} />
        <Route path='/uploadpoem' element={<UploadPoem />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
