import { ReactElement, FC } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';
import { Home } from './views/Home';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Team } from './components/team/Team';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import './App.scss';

export const App: FC = (): ReactElement => (
    <Router>
        <ThemeProvider theme={theme}>
            <div>
                <NavBar />
                <main>
                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/team' component={Team} />
                </main>
            </div>
        </ThemeProvider>
    </Router>
);
