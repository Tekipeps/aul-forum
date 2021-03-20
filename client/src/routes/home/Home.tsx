import { ReactElement, FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PageNotFound } from '../404/PageNotFound';
import ThemeToggler from './ThemeToggler';
import routes from './home-routes.json';
import PostSection from './PostSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

interface HomeParams {
    baseUrl: string;
    toggleTheme: () => void;
}

export const Home: FC<HomeParams> = ({ baseUrl, toggleTheme }): ReactElement => {
    const DEFAULT_SECTION = 'most-recent';

    return (
        <HomeLayout>
            <ThemeToggler {...{ toggleTheme }} />
            <Switch>
                <Route exact path={baseUrl}>
                    <Redirect to={`${baseUrl}/${DEFAULT_SECTION}`} />
                </Route>
                {routes.map(({ url }, i) => (
                    <Route exact path={`${baseUrl}${url}`} key={i} component={PostSection} />
                ))}
                <Route component={PageNotFound} />
            </Switch>
        </HomeLayout>
    );
};
