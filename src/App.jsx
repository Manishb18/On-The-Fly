import { useState } from 'react'
import Navbar from './MyComponents/Navbar'
import WorkFlow from './MyComponents/workFlow'
import Todo from './MyComponents/WorkFLowComponents/TodosComponents/Todos'
import TextStorer from './MyComponents/WorkFLowComponents/TextStorer/TextStorer'
import SecretsStorer from './MyComponents/WorkFLowComponents/SecretStorer/SecretsStorer'
import About from './MyComponents/NavBarComponents/About'
import Contact from './MyComponents/NavBarComponents/Contact'
import { Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<WorkFlow/>}/>
      <Route path='/home' element = {<WorkFlow/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/todo' element = {<Todo/>}/>
      <Route path='/textStorer' element = {<TextStorer/>}/>
      <Route path='/secretStorer' element = {<SecretsStorer/>}/>
    </Routes>
    </>
  )
}
export default App
