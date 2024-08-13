// import React, { useRef, useState } from 'react';
// import './App.css';


// function App() {

//   const [x , setx] = useState([])

//   const inputAdd = useRef()


//   const add = () =>{
//     const value = inputAdd.current.value 

//     const newData = {completed : false , value}

//     // console.log(value)

//    setx([...x , newData])

//    inputAdd.current.value = ''
//   }

//   const itemDone = (kim) => {

//     const newAray = [...x]

//     x[kim].completed = !x[kim].completed

//     setx(newAray)

//   }

//   const todeletye = (index) => {
//     const newX = [...x]
//     newX.splice(index,1)
//     setx(newX)
//   }

//   return (

//   <div className='app'>
//     <h2> To do list </h2>

//     <ul>
//       {
//         x.map(({value , completed} , index ) => {
//           return <div className='div1'> 

//           <li className={completed ? 'diffStyle' : ''} onClick={() => itemDone(index)}>{value}</li>

//           <span onClick={() => todeletye(index) } > X </span>
//           </div> 


//         })
//       }
//     </ul>

//     <input ref={inputAdd} placeholder='Enter your task'/>
//     <button onClick={add}>Add</button>

//   </div>
//   );
// }

// import Header from './components/Header/Header'
// import Container from './components/Container/Container'
// import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './Sections/indexSections'
import { Home, Profile } from './Pages/indexPages'
import { Container } from './components/indexComponent'


import './App.css'


const App = () => {
  return (

    <>
      <Router>

        <Header />
        <Container >

          <Routes>

            <Route path='/' element={<Home />} /> 
            
            <Route path='/profile' element={<Profile />} />

          </Routes>


          <Footer />
        </Container>

      </Router>
      

    </>

  )
}

export default App
