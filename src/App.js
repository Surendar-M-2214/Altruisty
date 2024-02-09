import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Pagecompos/Home";
import Aboutus from "./Pagecompos/Aboutus";
import Services from "./Pagecompos/Services";
import Ipss from "./Pagecompos/Ipss";
import Training from "./Pagecompos/Training";
import Contactus from "./Pagecompos/Contactus";

function App() {
  return (
    <div>
    <Router>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Services" element={<Services/>}/>
     <Route path="/Ipss" element={<Ipss/>}/>
     <Route path="/Training" element={<Training/>}/>
     <Route path="/Contactus" element={<Contactus/>}/>
     <Route path="/Aboutus" element={<Aboutus/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
