import { useState } from 'react'

import video from './assets/hero-480.mp4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="video-container">
      <video autoPlay loop muted id="video-bg">

        <source src={video} type="video/mp4" />

      </video>
    </div>
  )
}

export default App
