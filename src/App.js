import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router, useParams, NavLink } from 'react-router-dom';
import scripts from './scripts';

function App() {

  const toRoutes = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" }
  ]


  return (
    <Router>

      <div className="App">

        <nav>
          

          {
            toRoutes.map(({ title, id }) => {
              return <NavLink
                exact
                key={id}
                activeClassName="selected"
                to={`/${title}`}>
                <h3>
                  {title.toLocaleUpperCase()}
                </h3>
              </NavLink>

            })
          }
        </nav>

        <Switch>

          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function Child() {
  let { id } = useParams()
  const selected = scripts.filter(item => item.id === id)[0]

  return (
    <div className="chap">
      <p>{selected.script}</p>
    </div>
  )
}