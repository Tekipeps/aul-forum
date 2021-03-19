import { ReactElement, FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';
import { Home } from './routes/home/Home';
import { Login } from './routes/login/Login';
import { Register } from './routes/register/Register';
import { Team } from './routes/team/Team';
import { PageNotFound } from './routes/404/PageNotFound';
import getTheme from './theme';
import { ThemeProvider } from 'styled-components';
import './App.css';

export const App: FC = (): ReactElement => {
    const DEFAULT_THEME = window.localStorage.getItem('theme') || 'light';
    const [currentTheme, setTheme] = useState(DEFAULT_THEME);

    const toggleTheme = (): void => {
        currentTheme === 'light' ? setTheme('dark') : setTheme('light');
    };

    useEffect(() => {
        document.body.style.backgroundColor = getTheme(currentTheme).bgcolor;
        window.localStorage.setItem('theme', currentTheme);
    });

    return (
        <Router>
            <ThemeProvider theme={getTheme(currentTheme)}>
                <button onClick={toggleTheme}>toggle</button>
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
            </ThemeProvider>
        </Router>
    );
};
