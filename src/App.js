import Footer from './Footer';
import './index.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Create from './Create';
import JobListingDetails from './JobListingDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/create' element={<Create />} />
            <Route path='/joblistingdetails/:id' element={<JobListingDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
