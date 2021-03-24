import { FC, ReactElement } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Notification from '../../components/reusable/Notification';
import routes from '../../routes/home/routes.json';

type routeType = { name: string; description: string } | undefined;

const SectionDescription: FC = (): ReactElement | null => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const currentUrl = `/${match?.params.location}`;
    const route: routeType = routes.find(({ url }) => currentUrl.includes(url));
    const description: string | undefined = route ? route.description : undefined;

    return description ? <Notification>{description}</Notification> : null;
};

export default SectionDescription;
