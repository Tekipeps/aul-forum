import { ReactElement, FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/nav/NavigationBar';
import { Home } from './routes/home/Home';
import { Login } from './routes/login/Login';
import { Register } from './routes/register/Register';
import { Team } from './routes/team/Team';
import { PageNotFound } from './routes/404/PageNotFound';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import './App.scss';

export const App: FC = (): ReactElement => {
    const [currentTheme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        if (currentTheme === 'light') setTheme('dark');
        else setTheme('light');
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme[currentTheme].bgcolor;
    });

    return (
        <Router>
            <ThemeProvider theme={theme[currentTheme]}>
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
