import { useState, useEffect } from 'react'
// TODO: read about aliases in vite projects
// import {
//   Modal,
//   Timer
// } from '@/components'
import Modal from './components/Modal/Modal';
// import Timer, { DIRECTIONS } from './components/Timer/Timer';

import './App.css'
import TimerStorage, { DIRECTIONS } from './components/Timer/TimerStorage';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const storageIsOpened = localStorage.getItem('open');


  //debug it untill copletely understand what's going on
  if (storageIsOpened === null) {
    localStorage.setItem('open', JSON.stringify(isOpen))
  }

  const handleOpenModal = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    localStorage.setItem('open', JSON.stringify(isOpen))
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={handleOpenModal} type='button' className='btn__open'>Open Modal</button>
      {isOpen && <Modal handleClose={handleClose} />}
      {/* <Timer startValue={0} step={1} direction={DIRECTIONS.DECR} endValue={-100} /> */}
      <TimerStorage startValue={0} step={1} direction={DIRECTIONS.DECR} endValue={-100} />
    </>
  )
}

export default App
