// import { useState } from 'react'
import Carusel from './components/Carusel/Carusel'
import './App.css'
export interface IList {
  title: string;
  imgUrl: string;
  text: string;
}

const caruselList: IList[] = [
  { title: 'Mafaka 1', imgUrl: "https://placehold.co/600x400/00ff00/FFFFFF/png", text: 'I am Mafaka 1' },
  { title: 'Mafaka 2', imgUrl: "https://placehold.co/600x400/0000ff/FFFFFF/png", text: 'I am Mafaka 2' },
  { title: 'Mafaka 3', imgUrl: "https://placehold.co/600x400/000000/FFFFFF/png", text: 'I am Mafaka 3' },
  { title: 'Mafaka 4', imgUrl: "https://placehold.co/600x400/ff0000/FFFFFF/png", text: 'I am Mafaka 4' },
  { title: 'Mafaka 5', imgUrl: "https://placehold.co/600x400/003300/FFFFFF/png", text: 'I am Mafaka 5' },
  { title: 'Mafaka 6', imgUrl: "https://placehold.co/600x400/000ff0/FFFFFF/png", text: 'I am Mafaka 6' },
]

function App() {
  return (
    <>
      <Carusel list={caruselList} />
    </>
  )
}

export default App


// props:
//   items: {title: string, imgURL: string, text:string}[]