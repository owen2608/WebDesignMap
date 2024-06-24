import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/NavBar.js";
import Dashboard from "./Components/DashBoard/DashBoard.js";

function App() {
  // Define the data array here
  const data = [
    { text: "First card text" },
    { text: "Second card text" },
    { text: "Third card text" },
    { text: "First card text" },
    { text: "Second card text" },
    { text: "Third card text" },
    { text: "First card text" },
    { text: "Second card text" },
    { text: "Third card text" },
    { text: "First card text" },
    { text: "Second card text" },
    { text: "Third card text" },
    // More items can be added here
  ];

  return (
    <>
      <Navbar /> {/* Using self-closing tags for components without children */}
      <Dashboard items={data} />{" "}
      {/* Pass the data array to the Dashboard component */}
    </>
  );
}

export default App;
