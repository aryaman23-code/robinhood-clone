import Header from "./Header.js"
import Body from "./Body.js"
import Newsfeed from "./Newsfeed.js"
import Stats from "./Stats.js"
import './App.css';
// cbsf932ad3i9sd7n9kb0
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="app__header">
        {/* HEADERl */}
        <Header />
      </div>
      <div className="app__body">
        {/* body */}
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
        <Body />
      </div>
      
    </div>
  );
}

export default App;
