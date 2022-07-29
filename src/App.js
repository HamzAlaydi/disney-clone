import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Header from "./components/header";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
