import { ReactElement, FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';
import { Home } from './routes/home/Home';
import { Login } from './routes/login/Login';
import { Register } from './routes/register/Register';
import { Team } from './routes/team/Team';
import { PageNotFound } from './routes/404/PageNotFound';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme';
import './App.css';

export const App: FC = (): ReactElement => {
    const DEFAULT_THEME = window.localStorage.getItem('theme') || 'light';
    const [currentTheme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        document.body.style.backgroundColor = getTheme(currentTheme).bgcolor;
        window.localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const toggleTheme = (): void => (currentTheme === 'light' ? setTheme('dark') : setTheme('light'));

    return (
        <Router>
            <ThemeProvider theme={getTheme(currentTheme)}>
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/home' />
                        </Route>
                        <Route path='/home'>
                            <Home baseUrl='/home' {...{ toggleTheme }} />
                        </Route>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/team' component={Team} />
                        <Route component={PageNotFound} />
                    </Switch>
                </main>
            </ThemeProvider>
        </Router>
    );
};
