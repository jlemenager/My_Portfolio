import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer />
   </div>
  )
}

export default App
