import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router, useParams, NavLink } from 'react-router-dom';
import scripts from './scripts';
import click from './Assets/clicksvg.svg'
import n404 from './Assets/404.png'
import { motion } from 'framer-motion'

function App() {

  const toRoutes = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
    { id: 4, title: "error" }

  ]
 


  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Chapter's</h1>
          <div>
            {
              toRoutes.map(({ title, id }) => {
                return <NavLink
                  exact
                  key={id}
                  activeClassName="selected"
                  to={`/${title}`}>

                  <h3>
                    {title}
                  </h3>
                </NavLink>

              })
            }
          </div>
        </nav>

        <Switch>


          <Route path="/:id" children={<Child />} />
          <Route path="/" children={<Home />} />
          <Route path="*" children={<NotFounf />} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;



function Child() {
  let { id } = useParams()
  const selected = scripts.filter(item => item.id === id)[0]

  return (
    <div className="chap">
      {selected !== undefined ?
        <p>{selected.script}</p>
        :
        <NotFounf />

      }
    </div>
  )
}
function Home() {

  return (
    <div className="home">
      <img src={click} width="100%" alt="indicator" />
    </div>
  )
}

function NotFounf() {

  return (
    <div className="n404">
      <img src={n404} width="100%" alt="404" />
      <h3>Chapter not found</h3>
    </div>
  )
}
