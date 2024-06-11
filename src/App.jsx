// Write rafce and press enter - a shortcut to create React app component code with same name as file name.

// importing Route component as BrowserRouter
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (

    // <div>
    //     {/* Remove App and put these to identify whether the code is working or not. Now code is not working so create index.css */}
    //     <h1 className="text-3xl font-bold underline text-red-500">
    //     Hello world!
    //     </h1>
    // </div>

    // It's the element of reactjs which is like a div
    <main className="bg-slate-300/20 h-full">

        {/* It's a wrapper which wraps everything */}
        <Router>
        <Navbar />

        {/* It's the parent's elements for each of the routes components */}
        <Routes>

            {/* Self-enclosing component which interacts with paths and renders some kind of components which belong to that path. Here rendering a string Home. Press Alt for every line of code and it will put one input line on the each and every different lines and you can put several inputs on different lines at the same time. Here Import the elements.*/}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />

        </Routes>
      </Router>
    </main>
  )
}

export default App