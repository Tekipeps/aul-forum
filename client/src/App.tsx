import { ReactElement, FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';

import { Home } from './routes/home/Home';
import { Login } from './routes/login/Login';
import { Register } from './routes/register/Register';
import { Team } from './routes/team/Team';
import { PageNotFound } from './routes/404/PageNotFound';


import './App.scss';

export const App: FC = (): ReactElement => (
    <Router>

        <div>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/team' component={Team} />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
        </div>

    </Router>
);
