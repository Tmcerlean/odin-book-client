import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import useLocalStorage from './hooks/useLocalStorage';
import * as ROUTES from './constants/routes';
import Header from './components/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const App: React.FC = () => {

  const initialUserObject = {
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    profileImageUrl: "",
    token: ""
  }

  const [user, setUser] = useLocalStorage("user", initialUserObject);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home user={user} setUser={setUser} />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login user={user} setUser={setUser} />
            </Route>
            <Route path={ROUTES.SIGNUP}>
              <Signup user={user} setUser={setUser} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
