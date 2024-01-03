import React from "react";
import TheLayout from "./components/container/TheLayout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TheLayout />
      </div>
   </BrowserRouter>
  );
};

export default App;
