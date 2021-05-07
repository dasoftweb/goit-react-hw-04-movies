import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
// Components
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const Home = lazy(() => import('./views/Home' /* webpackChunkName: "Home" */));
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /* webpackChunkName: "NotFound" */),
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="AppBar">
          <Suspense fallback={<Loader />}>
            <AppBar />
          </Suspense>
        </header>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
