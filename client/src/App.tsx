import { ReactElement, FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Team } from './components/team/Team';
import { PageNotFound } from './components/reusable/PageNotFound';

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
