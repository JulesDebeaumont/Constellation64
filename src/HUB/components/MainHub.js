import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// components
import Gallery from '../../FOLIO/components/Gallery';
import About from "../../FOLIO/components/About"
import Contact from "../../FOLIO/components/Contact"
import Header from "../../FOLIO/components/Header"

function MainHub() {
  return (
    <>
      <Header />
      <Router basename="/Constellation64.github.io">
        <Routes>
          <Route exact path="/" element={<Navigate to="/gallery" />} />

          <Route path="/gallery/*" element={<Gallery />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route path="/*" element={<Navigate to="/gallery" />} />

        </Routes>
      </Router>
    </>
  );
}

export default MainHub;
