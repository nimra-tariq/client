import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Container } from "@material-ui/core";
import Auth from "./components/Auth/Auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
