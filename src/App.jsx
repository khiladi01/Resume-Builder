import { Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './components/Home';
import Detail from './components/Userdetail';
import Edutra from './components/UserEd&Tr';
import Experience from './components/Userexperience';
import Skill from './components/Userskill';
import Summary from './components/Usersummary';

function App() {


  return (
    <>

    <Header />
      <Routes>

        <Route path='/' />

        <Route path='/detail' />

        <Route path='/summary' />

        <Route path='/skill' />

        <Route path='/experience' />

        <Route path='/educationtraining' />

      </Routes>
    </>
  )
}

export default App
