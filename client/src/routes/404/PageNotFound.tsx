import { ReactElement, FC } from 'react';
import Styled404, { StyledMessage } from './PageNotFound.styled';

export const PageNotFound: FC = (): ReactElement => (
    <>
        <Styled404>
            <div>4</div>
            <div>0</div>
            <div>4</div>
        </Styled404>
        <StyledMessage>Oops!The requested page was not found!</StyledMessage>
    </>
);
