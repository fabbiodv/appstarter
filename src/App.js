import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/reports" component={Reports} />

      </Routes>
      </Router>
    </>
  );
}

export default App;
