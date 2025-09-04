import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import SignUp from "./components/pages/signup";
import Login from "./components/pages/login";
import Email from "./components/pages/email";
import FinishSignIn from "./components/pages/finishsign";


function App() {
let Navigate=useNavigate();

function about(){
  Navigate("About")
}
function home(){
  Navigate("..")
}
function sign(){
  Navigate("signup")
}
function log(){
  Navigate("login")
}
function emailsign(){
  Navigate("email")
}

  return (
    <div>
     <Routes>
      <Route index element={<Home about={about} sign={sign} log={log}/>} />
      <Route path="About" element={<About home={home} sign={sign} log={log}/>} />
      <Route path="signup" element={<SignUp log={log} emailsign={emailsign}/>} />
      <Route path="login" element={<Login sign={sign}/>} />
      <Route path="email" element={<Email />} />
      <Route path="finishsign" element={<FinishSignIn />} />
    </Routes>
    </div>
  );
}

export default App;
