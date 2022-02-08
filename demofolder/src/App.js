
import './App.css';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
