
import {useEffect} from 'react'
import './App.css';

function App() {
   
  useEffect(() => {
    const widgetContainer = document.getElementById("coinmarket-widget");
    const widget = document.getElementById("coinmarketcap-widget-marquee");
    widgetContainer.appendChild(widget);
  }, [])
   
  return (
    <>
      <div className="App">
        <div id="coinmarket-widget" />
      </div>
    </>
  );
}

export default App;
