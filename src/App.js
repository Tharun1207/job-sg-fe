import Footer from './Footer';
import './index.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />

          <div className='content'>

          </div>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
