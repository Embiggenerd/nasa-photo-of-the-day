import React, { useState, useEffect } from "react";
import axios from 'axios'

import LoadingScreen from "./components/LoadingScreen"
import PlanetInfo from "./components/PlanetInfo"
import "./App.css";


function App() {

  const [loading, setLoading] = useState(true)
  const [date, setDate] = useState("")
  const [explanation, setExplanation] = useState("")
  const [imgURL, setImgURL] = useState("")

  useEffect(() => {
    // Update the document title using the browser API
    const str = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14'
    axios.get(str)
      .then(req => {
        console.log(req.data)
        setDate(req.data.date)
        setExplanation(req.data.explanation)
        setImgURL(req.data.hdurl)
      })
      .then(() => setLoading(false))
      .catch(e => console.log(e))
  }, []);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="App">
      <PlanetInfo
        exp={explanation}
        date={date}
        url={imgURL} />
    </div>
  );
}

export default App;
