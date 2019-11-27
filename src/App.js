import React from "react";
import { BrowserRouter } from "react-router-dom";

// import SideButton from "./components/side.button";
// import { setState } from "expect/build/jestMatchersObject";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout isAuthenticated />
    </BrowserRouter>
  );
}

export default App;
