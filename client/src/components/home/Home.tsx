import { ReactElement, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostNavigation from './PostNavigation';
import PostSection from './PostSection';
//import MembersSection from './MembersSection';

interface HomeParams {
    match: {
        url: string;
    };
}

export const Home: FC<HomeParams> = ({ match }): ReactElement => {
    const { url } = match;
    const DEFAULT_SECTION = 'most-recent';
    return (
        <>
            <Redirect to={`${url}/${DEFAULT_SECTION}`} />
            <PostNavigation baseURL={url} />
            <Route exact path={`${url}/:section`} component={PostSection} />
        </>
    );
};
