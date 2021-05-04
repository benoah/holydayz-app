import './sass/style.scss';
import Header from "./components/header/Header"
import Home from "./components/home/Home"


function App() {
  return (
    <div className="App">
      <Header content="this is the nav" />
      <Home />
    </div>
  );
}

export default App;
