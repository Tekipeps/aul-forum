import { ReactElement, FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/nav/NavigationBar';
import { HomePage } from './routes/home/Home';
import { LoginPage } from './routes/login/Login';
import { RegisterPage } from './routes/register/Register';
import { AboutPage } from './routes/about/About';
import { ProfilePage } from './routes/profile/Profile';
import { PageNotFound } from './routes/404/PageNotFound';
import getTheme from './theme';
import './App.css';
import { useAppDispatch } from './state/hooks';
import { isValidToken } from './state/auth/actions';

export const App: FC = (): ReactElement => {
    const DEFAULT_THEME = window.localStorage.getItem('theme') || 'light';
    const [currentTheme, setTheme] = useState(DEFAULT_THEME);

    const dispatch = useAppDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = getTheme(currentTheme).body.bgcolor;
        dispatch(isValidToken());
    }, [currentTheme]);

    const toggleTheme = (): void => {
        const theme = currentTheme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', theme);
        setTheme(theme);
    };
    // TODO: path '/' should not redirect to '/home

    return (
        <Router>
            <ThemeProvider theme={getTheme(currentTheme)}>
                <NavBar {...{ toggleTheme }} />
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/home' />
                        </Route>
                        <Route path='/home'>
                            <HomePage baseUrl='/home' />
                        </Route>
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/register' component={RegisterPage} />
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path='/profile' component={ProfilePage} />
                        <Route component={PageNotFound} />
                    </Switch>
                </main>
            </ThemeProvider>
        </Router>
    );
};
