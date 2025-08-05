import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VolunteerForm from "./components/VolunteerForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<VolunteerForm />} path="/volunteer" />
          <Route element={<AboutUs />} path="/about" />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
