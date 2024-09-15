import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/blogs" element={<Blogs/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
