import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
      </Routes>

    </Router>

  )
}
export default App;