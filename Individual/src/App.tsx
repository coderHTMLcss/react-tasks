// import { useEffect, useState } from 'react'
import usePlanets from './hooks/usePlanets'
import ListItems from './Listitems/ListItems';
import './App.css'

interface IPlanet {
  name: string,
  diameter: string,
  rotation_period: string,
  orbital_period: string,
  gravity: string,
  population: string,
  climate: string,
  terrain: string,
  surface_water: string,
  residents: string[],
  films: string[],
  url: string,
  created: string,
  edited: string,
}

function App() {
  const planets = usePlanets();

  return (
    <>
      <ListItems<IPlanet> items={planets} />
    </>
  )
}

export default App