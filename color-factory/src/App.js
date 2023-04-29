import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListColors from "./ListColors";
import ColorDetails from "./ColorDetails";
import ColorForm from "./ColorForm";

function App() {
    return (
    <div className="App">
      <BrowserRouter>
           <Routes>
            <Route exact path="/colors" element={<ListColors colors={App.defaultProps.colors} />} />
            <Route exact path="/colors/:name" element={<ColorDetails />} />
            <Route exact path="/colors/new" element={<ColorForm />} />
            <Route path='*' element={<Navigate to='/colors' />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: [
    "red",
    "green",
    "orange"
  ]
}

export default App;
