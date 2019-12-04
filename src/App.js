import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// import SideButton from "./components/side.button";
// import { setState } from "expect/build/jestMatchersObject";
import Layout from "./layout/Layout";
import Login from "./containers/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let layout = isAuthenticated ? <Layout isAuthenticated /> : <Login />;

  return <BrowserRouter>{layout}</BrowserRouter>;
};

export default App;
