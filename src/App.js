import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Quiz from './Pages/Quiz';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ReactCricketQuiz/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
