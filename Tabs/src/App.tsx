import './App.css';
import Tabs from './components/Tabs/Tabs';
import { IContent } from './utils/types';


const content: IContent[] = [
  { title: 'Popular', content: <div>Popular</div> },
  { title: 'Large Car', content: <div>Large Car</div> },
  { title: 'Small Car', content: <div>Small Car</div> },
  { title: 'Exclusive Car', content: <div>Exclusive Car</div> },
]

function App() {
  return (
    <>
      <Tabs content={content} />
    </>
  )
}

export default App
