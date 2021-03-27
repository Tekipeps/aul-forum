import { ReactElement, FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as StateProvider } from 'react-redux';
import store from './state/store';
import { NavBar } from './components/nav/NavigationBar';
import { HomePage } from './routes/home/Home';
import { LoginPage } from './routes/login/Login';
import { RegisterPage } from './routes/register/Register';
import { AboutPage } from './routes/about/About';
import { ProfilePage } from './routes/profile/Profile';
import { PageNotFound } from './routes/404/PageNotFound';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme';
import './App.css';

export const App: FC = (): ReactElement => {
    const DEFAULT_THEME = window.localStorage.getItem('theme') || 'light';
    const [currentTheme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        document.body.style.backgroundColor = getTheme(currentTheme).bgcolor;
    }, [currentTheme]);

    const toggleTheme = (): void => {
        if (currentTheme === 'light') {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return (
        <Router>
            <StateProvider store={store}>
                <ThemeProvider theme={getTheme(currentTheme)}>
                    <NavBar />
                    <main>
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to='/home' />
                            </Route>
                            <Route path='/home'>
                                <HomePage baseUrl='/home' {...{ toggleTheme }} />
                            </Route>
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/register' component={RegisterPage} />
                            <Route exact path='/about' component={AboutPage} />
                            <Route exact path='/profile' component={ProfilePage} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </main>
                </ThemeProvider>
            </StateProvider>
        </Router>
    );
};
