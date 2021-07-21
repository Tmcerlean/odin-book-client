import { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import * as ROUTES from './constants/routes';
import Login from './screens/Login';

const Home: React.LazyExoticComponent<() => JSX.Element> = lazy(() => import('./screens/Home'));

const App: React.FC = () => {

  const [userAuth, setUserAuth] = useState(() => {
    const user = localStorage.getItem("userAuth");
    return !!user;
  });

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login userAuth={userAuth} setUserAuth={setUserAuth} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
