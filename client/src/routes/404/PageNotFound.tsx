import { ReactElement, FC } from 'react';
import Styled404, { StyledMessage , Styledbackground} from './PageNotFound.styled';

export const PageNotFound: FC = (): ReactElement => (
    <>
    <Styledbackground>
        <Styled404>
            <div>5</div>
            <div>0</div>
            <div>5</div>
        </Styled404>
        <StyledMessage>Oops!! It looks like one of the developers fell asleep while coding.😪!</StyledMessage>
        <br></br>
        </Styledbackground>
    </>
);
