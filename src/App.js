import React from 'react';

import './styles/App.css';
import './styles/Header.css';
import './styles/Body.css';

import Header from './components/Header';
import Body from './components/Body';

export default function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="App">
      <Header
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Body darkMode={darkMode} />
    </div>
  );
}
