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
import { useProfileContext } from './context/ProfileContext';



const GetProfileAPI = "/api/v1/reader";

const App = () => {
  const { checkLogin, loggedInStatus } = useProfileContext();

  useEffect(() => {
    checkLogin(GetProfileAPI);
    console.log(loggedInStatus);
  }, [loggedInStatus]);
  return (
    <BrowserRouter>
      {/* <Navs /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {
          loggedInStatus ? <>
            <Route path="/singlepoem/:id" element={<SinglePoem />} />
            <Route path='/uploadpoem' element={<UploadPoem />} />
            <Route path="/updatePoem/:fieldName/:poemId" element={<UpdatePoemContent />} />
            <Route path="/profile" element={<ProfilePage />} />
          </> :
            <>
              <Route path='/login' element={<Login />} />
              <Route path="/poems" element={<Poems />} />
              <Route path='/register' element={<Registration />} />
            </>
        }


        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
