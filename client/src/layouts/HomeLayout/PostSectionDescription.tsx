import { FC, ReactElement } from 'react';
import { StyledSectionDescription } from '../../routes/home/PostSection.styled';
import { useRouteMatch } from 'react-router-dom';
import routes from '../../routes/home/home-routes.json';

type routeType = { name: string; description: string } | undefined;

const SectionDescription: FC = (): ReactElement => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const currentUrl = `/${match?.params.location}`;
    const route: routeType = routes.find(({ url }) => currentUrl.includes(url));
    const description: string = route ? route.description : 'Could not load section description';

    return <StyledSectionDescription>{description}</StyledSectionDescription>;
};

export default SectionDescription;
