import { useState } from 'react';
import Header from './components/Header/Header';
import { INavItems } from './utils/types';
import { useWindowSize } from './hooks';

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
  const windowSize = useWindowSize()

  const handleToggle = () => {
    setOpen(!isOpen);
  }

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