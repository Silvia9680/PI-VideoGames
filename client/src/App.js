import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CardDetail from './components/CardDetail/CardDetail';
import CreateGame from './components/CreateGame/CreateGame';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
          <Route exact path='/'component={LandingPage}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/videogame/:id' component={CardDetail}></Route>
          <Route exact path='/CreateGame' component ={CreateGame}></Route>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
