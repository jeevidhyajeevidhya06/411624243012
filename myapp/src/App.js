// import logo from './logo.svg';
// import './App.css';
// import First from './first.js';
// import Second from './second.js'
// import Parent from './Parent.js';
// import Page from './pages/Page.js';
// function App() {
//   return (
//     <div>
//     <Page/>
//     <Parent/>
//     <First/>
//     <Second/>
//     </div>
//   );
// }

// export default App;


// const fruits=["Apple","Banana","Orange"];
// function App(){
//   return(
//     <>
//     {fruits.map((fruit)=>(
//       <p key={fruit}>{fruit}</p>
//     ))}
//     </>
//   );
// }
// export default App;


import React from "react";
import MyCounter from "./Counter";
//import {Add} from './Math'
import {Routes,Route} from 'react-router-dom'
import First from './first'
import Navbar from './Navbar'
function App() {
    return (
    // <div>
    //   <Add/>
    //   <MyCounter />
    // </div>
       <div>
        <Navbar/>
       <Routes>
        <Route path='/counter' element={<MyCounter/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path="*" element={<h1>Incorrect Route</h1>}/>
        {/* <Route path='/nav' element={<Navbar/>}></Route> */}
       </Routes>
    </div>
  );
}

export default App;



// import HomePage from "./pagess/HomePage";

// function App() {
//   return (
//     <HomePage />
//   );
// }

// export default App;

