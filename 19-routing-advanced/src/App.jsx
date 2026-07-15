import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div className='h-screen text-white bg-black'>
      <Navbar/>
      <Navbar2/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:courseId' element={<CourseDetail/>}/>
          <Route path='/contact' element={<Contact/>}>
            <Route path='men' element={<Men/>} />
            <Route path='women' element={<Women/>} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
          

          
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
