import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Header from "./components/Header"
import StudyCase from "./components/StudyCase"
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:studySlug" element={<StudyCase />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
