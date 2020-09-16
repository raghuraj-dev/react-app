import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Songs from './components/song'
import Songdetail from './components/songdetail'

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

// function App(){
//   const users=[
//     {"name":"raghu", "email":"bala@yahoo.com"},
//     {'name':'mama', 'email':"kumar@gmail.com"}
//   ];
//   const listItem=users.map((number) =>
//     <li>{number.email}</li>
//   );
//   return (
//     // <BrowserRouter>
//     //   <Route path="/" component={Navbar}/>
//     //   <Route exact path="/" component={Home}/>
//     //   <Route path="/" component={Footer}/>
//     //   <Route path="/song" component={Song}/>
//     //   <Route path="/song/:id" component={Songdetail}/>
//     //   <Route path="/singer" component={Singer}/>
//     // </BrowserRouter>
//     <div>
//       <h1>{listItem}</h1>
//     </div>
//   );
// }

const Fullsongs=[
  {
    "id":"1",
    "name":"Quit pannuda",
    "movie":"Master",
    "image":"https://i.ytimg.com/vi/SaZS9RaiUs4/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"2",
    "name":"Antha Kanna Paaththakka",
    "movie":"Master",
    "image":"https://i.ytimg.com/vi/Y4t27KY6qW8/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"3",
    "name":"En iniya Thanimaiye",
    "movie":"Teddy",
    "image":"https://i.ytimg.com/vi/wfH0ioSqLG0/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"4",
    "name":"Friendship anthem",
    "movie":"Oh my kadavule",
    "image":"https://i.ytimg.com/vi/5p7paslm7Bo/hqdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"5",
    "name":"Kathaippoma?",
    "movie":"Oh my kadavule",
    "image":"https://i.ytimg.com/vi/Lvq_-hCdZKk/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"6",
    "name":"Veyyon Silli",
    "movie":"Soorarai potrtru",
    "image":"https://www.dsrmedias.com/sites/default/files/styles/large/public/field/image/11vv_29.jpg?itok=2zO8VBbc",
    "link":"",
    "lyrics":""
  },
  {
    "id":"7",
    "name":"Neenga mudiyuma?",
    "movie":"Psycho",
    "image":"https://i.ytimg.com/vi/srwsHJb4y8U/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"8",
    "name":"Tharam maara Single",
    "movie":"Darbar",
    "image":"https://i.ytimg.com/vi/QUoJIknUk-A/sddefault.jpg#404_is_fine",
    "link":"",
    "lyrics":""
  },
  {
    "id":"9",
    "name":"Murada Murada",
    "movie":"Dhanusu Raasi neyarkale",
    "image":"https://i.ytimg.com/vi/jl2sQ1QuhMw/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"10",
    "name":"Thalelo",
    "movie":"Thampy",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxnZBuT9MBJ7kdtR14I5a5mNkhJ8YVmtYk1g&usqp=CAU",
    "link":"",
    "lyrics":""
  },
  {
    "id":"11",
    "name":"Mayilaanchi",
    "movie":"Namma veeddu pillai",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjbwvvNz_VP_kf-1sFp9ab_N93PYfA9KPLRw&usqp=CAU",
    "link":"",
    "lyrics":""
  },
  {
    "id":"12",
    "name":"Un koodave porakkanum",
    "movie":"Namma veeddu pillai",
    "image":"https://i.ytimg.com/vi/YFUBso2EbnM/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"13",
    "name":"Sanda kaari",
    "movie":"Sangathamizhan",
    "image":"https://i.ytimg.com/vi/rNQ59clpmFs/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"14",
    "name":"Unakkaka",
    "movie":"Bigil",
    "image":"https://i.ytimg.com/vi/2b6mFP4abZQ/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"15",
    "name":"5 manikku",
    "movie":"Puppy",
    "image":"https://i.ytimg.com/vi/CTW4pqSHH3I/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  },
  {
    "id":"16",
    "name":"Unmai ethu",
    "movie":"Saaho",
    "image":"https://i.ytimg.com/vi/iJZqWYuEw0I/maxresdefault.jpg",
    "link":"",
    "lyrics":""
  }
];

function App(){
  return(
    <BrowserRouter>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home}/>
        <Route path="/" component={Footer}/>
        <Route exact path="/song" component={Songs}/>
        <Route path="/song/:id" component={Songdetail}/>
      </BrowserRouter>
  )
}

export {App,Fullsongs};
