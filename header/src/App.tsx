import Header from './Components/Header/Header'
import './index.css';
import { INavItems } from './types/types';

const navItems: INavItems[] = [
  { link: "#", text: "Home", id: "1" },
  { link: "#", text: "Contact", id: "2" },
  { link: "#", text: "About Us", id: "3" },
  { link: "#", text: "Comments", id: "4" }
];

function App() {

  return (
    <>
      <Header navItems={navItems} />
    </>
  )
}

export default App
