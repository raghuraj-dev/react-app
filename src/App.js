import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Song from './components/song'
import Songdetail from './components/songdetail'
import Singer from './components/singer.jsx'

// const Home = (props) => {
//   return <div>Home</div>;
// }

// const Test = (props) => {
//   return <div>Test</div>;
// }

// const Check = (props) => {
//   return <div>Check</div>;
// }

// const Nomatch = (props) =>{
//   return <div>No match</div>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/" component={Home}/>
//       <Route path="/test" component={Test}/>
//       <Route path="/test/:id" component={Check}/>
//       <Route component={Nomatch}/>
//     </BrowserRouter>
//   );
// }

function App(){
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar}/>
      <Route exact path="/" component={Home}/>
      <Route path="/" component={Footer}/>
      <Route path="/song" component={Song}/>
      <Route path="/song/:id" component={Songdetail}/>
      <Route path="/singer" component={Singer}/>
    </BrowserRouter>
  );
}

export default App;
