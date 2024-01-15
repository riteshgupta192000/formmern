import './App.css';
// import BasicComponent from"./components/BasicComponent";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Responses from "./pages/Responses";
function App() {
  return (
    <>
       {/* <BasicComponent></BasicComponent> */}
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/responses" element={<Responses/>} />
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default App;
