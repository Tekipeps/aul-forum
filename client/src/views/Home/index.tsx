import { ReactElement, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostSection from './HomeSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

interface HomeParams {
    match: {
        url: string;
    };
}

export const Home: FC<HomeParams> = ({ match }): ReactElement => {
    const { url } = match;
    const DEFAULT_SECTION = 'most-recent';
    return (
        <HomeLayout>
            <Redirect to={`${url}/${DEFAULT_SECTION}`} />
            <Route exact path={`${url}/:section`} component={PostSection} />
        </HomeLayout>
    );
};
