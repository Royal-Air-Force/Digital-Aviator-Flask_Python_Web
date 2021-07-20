import React, {
  useState,
  useEffect
} from 'react'
import ReactDOM from 'react-dom'
import '@royalnavy/fonts'
import {
  GlobalStyleProvider,
  Button,
  Badge
} from '@royalnavy/react-component-library'

import './App.css';

import HackathonHeader from './components/HackathonHeader';
import NonProd from './components/NonProd';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <GlobalStyleProvider>
    <div className="App">
      <NonProd></NonProd>
      <HackathonHeader>My gucci app!</HackathonHeader>
      <div className="main">
        <h1>Your app content here</h1>
        <p>Lorem ipsum dolar sit amet</p>
        <p>We've linked to the Royal Navy libraries so you can grab any component from there, like this badge:</p>
        <Badge size="xlarge">Wibble</Badge>
        <p>You can find other components here: <a href="https://royalnavy.io/components/badge/">https://royalnavy.io/components/badge/</a>. Hint: Click 'Storybook: Read Docs' to see usage examples.</p>
        <p>React Bootstrap is also included. For ideas see <a href="https://www.pluralsight.com/guides/how-to-import-components-from-react-bootstrap">https://www.pluralsight.com/guides/how-to-import-components-from-react-bootstrap</a></p>
        <p>For further hints, read the readme file!</p>

        <p>The current time from my Flask app is {currentTime}.</p>
      </div>
      <NonProd></NonProd>
    </div>
    </GlobalStyleProvider>
  );
}

export default App;
