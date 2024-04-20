import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { INavItems } from './utils/types';
import './App.css';

const navItems: INavItems[] = [
  { link: "#", text: "Home", id: "1" },
  { link: "#", text: "Contact", id: "2" },
  { link: "#", text: "Rental details", id: "3" },
  { link: "#", text: "Why Choose Us", id: "4" },
  { link: "#", text: "Testimonials", id: "5" }
];

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  console.log(windowSize);



  const handleToggle = () => {
    setOpen(!isOpen);
  }

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <Header
      navItems={navItems}
      handleToggle={handleToggle}
      isOpen={isOpen}
      logo='Logo'
      windowWidth={windowSize}
    />
  )
};


export default App