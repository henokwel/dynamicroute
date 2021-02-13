import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {

  const toRoutes = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" }
  ]


  return (
    <div className="App">

      <Switch  >

        <Route to />
      </Switch>

    </div>
  );
}

export default App;
