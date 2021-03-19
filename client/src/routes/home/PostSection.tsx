import { ReactElement, FC } from 'react';
import Post from './Post';
import dummyData from './dummy-assets/dummyPostData.json';
import routes from './home-routes.json';
import { StyledSectionDescription, StyledPostSection } from './PostSection.styled';

interface PostSectionParams {
    match: {
        url: string;
    };
}

type routeType = { name: string; description: string } | undefined;

const PostSection: FC<PostSectionParams> = ({ match }): ReactElement => {
    const urlArray: string[] = match.url.split('/');
    const urlHeader: string = urlArray[urlArray.length - 1].replace(/-/g, ' ');
    const route: routeType = routes.find((route) => route.name.toLowerCase() === urlHeader);
    let description: string;
    if (!route) description = '';
    else description = route.description;

    return (
        <>
            <StyledSectionDescription>{description}</StyledSectionDescription>
            <StyledPostSection>
                {dummyData.map((data) => (
                    <Post data={data} />
                ))}
            </StyledPostSection>
        </>
    );
};

export default PostSection;
