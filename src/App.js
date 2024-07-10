import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '@picocss/pico';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
