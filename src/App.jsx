import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/home";



function App() {
let Navigate=useNavigate();

  return (
    <div>
     <Routes>
      <Route index element={<Home />} />
     
    </Routes>
    </div>
  );
}

export default App;
