import React, { useState, useEffect } from "react";
import axios from 'axios'

import LoadingScreen from "./components/LoadingScreen"
import PlanetInfo from "./components/PlanetInfo"
import "./App.css";


function App() {
  const [timeMounted] = useState(Date.now())
  const [loading, setLoading] = useState(true)
  const [date, setDate] = useState("")
  const [explanation, setExplanation] = useState("")
  const [imgURL, setImgURL] = useState("")

  // Lets you set about the time that a loading screen should take. Give it a total time you
  // think it should take, and it will subtract it from the total after the network call. This
  // allows you to keep the loading screen on past the 'total' if the network calls needs it
  const normalizeLoading = (total, latency) => {
    setTimeout(()=>{
      setLoading(false)
    }, total - latency )
  }

  useEffect(() => { 
    // Update the document title using the browser API
    const str = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14'
    axios.get(str)
      .then(req => {
        const networkLatency = Date.now() - timeMounted // Here we get how much time the api call took
        setDate(req.data.date)
        setExplanation(req.data.explanation)
        setImgURL(req.data.hdurl)
        return networkLatency
      })
      .then( latency => {
        normalizeLoading(800, latency) // Pass latency and a total time to the function containing a setTimeout 
      })
      .catch(e => console.log(e))
  }, [timeMounted]);

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
