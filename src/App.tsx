import { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import * as ROUTES from './constants/routes';
import Header from './components/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const App: React.FC = () => {

  const [userAuth, setUserAuth] = useState(() => {
    const user = localStorage.getItem("userAuth");
    return !!user;
  });

  return (
    <div className="App">
      <Header />
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home userAuth={userAuth} setUserAuth={setUserAuth} />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login userAuth={userAuth} setUserAuth={setUserAuth} />
            </Route>
            <Route path={ROUTES.SIGNUP}>
              <Signup userAuth={userAuth} setUserAuth={setUserAuth} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
