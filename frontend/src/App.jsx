// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'; // Home component
import Login from './Login'; // Login component
import Register from './Register'; // Register component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register page route */}
      </Routes>
    </Router>
  );
}

export default App;
