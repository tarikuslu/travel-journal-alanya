import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import data from '../data'
import Card from './components/Card'
function App() {
  const cardComponents = data.map(element => {
    return <Card title={element.title} location={element.location}  mapUrl={element.googleMapsUrl} startDate={element.startDate} endDate={element.endDate}
    description={element.description} imageUrl={element.imageUrl}
    />
  })

  return (
    <div className="container">
      <Nav/>
      <div>
      {cardComponents}
      </div>
    </div>
  )
}

export default App
