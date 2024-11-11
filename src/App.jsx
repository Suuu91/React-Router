import { Routes, Route, Link} from "react-router-dom"

import Red from "./red.jsx"
import Blue from "./blue.jsx"
import Home from "./home.jsx"

const App = () => {

  return (
    <>  
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blue"}>Blue</Link>
          <Link to={"/red"}>red</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path = "/blue" element = {<Blue/>}/>
            <Route path = "/red" element = {<Red/>}/>
            <Route path = "/" element = {<Home />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
