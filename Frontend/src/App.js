import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Components/Login";
// import Signup from "./Components/SignupStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignupStudent from "./Components/SignupStudent";
import SignupTeacher from "./Components/SignupTeacher";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignupTeacher />} />
        <Route path="signupstudent" element={<SignupStudent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={Dashboard} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
