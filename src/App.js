import React, { useState, useEffect } from "react";
import axios from 'axios'

import LoadingScreen from "./components/LoadingScreen"
import "./App.css";

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Update the document title using the browser API
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(req => console.log(req.data))
      .then(() => setLoading(false))
      .catch(e => console.log(e))
  }, []);

  if (loading) {
    return <LoadingScreen />
  }
  return (
    <div className="App">
      <span>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </span>
    </div>
  );
}

export default App;
