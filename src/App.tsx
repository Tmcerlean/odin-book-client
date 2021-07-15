import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import * as ROUTES from './constants/routes';

const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(() => import('./screens/Home'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.HOME} component={Home} exact />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
