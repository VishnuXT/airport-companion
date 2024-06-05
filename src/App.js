import "./App.css";
import Contactpage from "./component/Contactpage";
import FAQpage from "./component/FAQpage";
import Servicepage from "./component/Servicepage";
import Aboutpage from "./component/Aboutpage";
import Homepage from "./component/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/FAQpage" element={<FAQpage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
