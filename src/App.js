import { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
// Components
import Home from './views/Home';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <ul className="menu-list">
          <li className="menu-list__item"> 
            <NavLink exact={true} to="/" className="menu-list__link" activeClassName="menu-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="menu-list__link" activeClassName="menu-active">
              Movies
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
