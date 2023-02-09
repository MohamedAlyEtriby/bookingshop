import "./App.css";
import { Route, Routes } from "react-router";
import Favorite from "./components/Favorite";
import Booklist from "./components/Booklist";
import Bookdetails from "./components/Bookdetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppcontextProvider } from "./components/context/context";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
