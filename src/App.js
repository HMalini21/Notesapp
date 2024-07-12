import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import '@picocss/pico';
import { v4 as uuidv4 } from 'uuid';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Account from './pages/Account';
import React, { useState } from 'react';

function App() {
  let [ArrayFrm, setArrayFrm] = useState(JSON.parse(localStorage.getItem('infoNew')) || []);

  React.useEffect(() => {
    localStorage.setItem('infoNew', JSON.stringify(ArrayFrm));
  }, [ArrayFrm]);

  function addArray(formD) {
    let updatedForm = [{ id: uuidv4(), isEdit: false, ...formD }, ...ArrayFrm];
    setArrayFrm(updatedForm);
  }

  function updateArray(id) {
    const index = ArrayFrm.findIndex((data) => data.id === id);
    console.log(ArrayFrm[index]);
  }

  function handleDelete(id) {
    console.log(id);
    const newData = ArrayFrm.filter((data) => data.id !== id);
    setArrayFrm(newData);
  }

  console.log(ArrayFrm);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage newData={ArrayFrm} handleDelete={handleDelete} updateArray={updateArray} />
            }
          />
          <Route path="/Login" element={<Login addArray={addArray} />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
