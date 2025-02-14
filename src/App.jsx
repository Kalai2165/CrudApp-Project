// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import Home from './components/home';
// import Home1 from './components/Home1';
// import Home2 from './components/home2';
// import Home3 from './components/home3';
// import Home4 from './components/home4';
// import About1 from './components/About1';
// import About2 from './components/About2';
// import About3 from './components/About3';
// import About4 from './components/About4';
// import About5 from './components/About5';
// import {Link,Routes,Route} from 'react-router-dom'
// import './App.css';
// import Home from './components/home';
// import About1 from './components/About1';
// import Home1 from './components/Home1';
// import About2 from './components/About2';
// import Defaultpage from './components/Defaultpage';
// function App() {
//   return (
//     <>
//     <nav>
//     <Link to={"/"}>Logo</Link>
//     <Link to={"/home"}>Home</Link>
//     <Link to={"/about1"}>About1</Link>
//     <Link to={"/home1"}>Home1</Link>
//     <Link to={"/about2"}>About2</Link>
//     </nav>

//     <Routes>
//     <Route path='/' element={<Defaultpage/>}/>
//      <Route path='/home' element={<Home/>}/>
//      <Route path='/about1' element={<About1/>}/>
//      <Route path='/home1' element={<Home1/>}/>
//      <Route path='/about2' element={<About2/>}/>
//     </Routes>

    {/* <h1>Hi, I am KalaiKumar</h1> */}

      {/* 
     <Home />
     <Home1/>
     <Home2/>
     <Home3/>
     <Home4/>
     <About1/>
     <About2/>
     <About3/>
     <About4/>
     <About5/> */}

  import CrudApp from "./API/CrudApp";
 import "./API/CrudApp.css";
  function App(){
    return(
      <>
       <CrudApp/> 
      
      </>
    )
  }

export default App;

