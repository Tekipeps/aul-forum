import styled from 'styled-components';

export const StyledUsersPage = styled.div`
    margin: 50px 0px;
`;

export const StyledUser = styled.div`
    min-width: 600px;
    max-width: 800px;
    border-radius: 24px 5px 5px 24px;
    display: flex;
    border: 1px solid grey;
    padding: 5px;
    margin: 3px auto;
    > span {
        margin: auto 10px;
        font-family: OpenSans;
        color: ${({ theme }) => theme.home.grey};
    }
    > .name {
        color: ${({ theme }) => theme.user_color};
        width: 100px;
        margin: auto 20px;
    }
    > .actions {
        display: flex;
        margin-left: auto;
        > div {
            margin: auto 4px;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            border: none;
            font-size: 14px;
            font-family: Nunito;
            cursor: pointer;
        }

        > .mute-user {
            background: #555;
            :hover {
                background: #444;
            }
        }
        > .ban-user {
            background: red;
            :hover {
                background: #f11;
            }
        }
    }
`;
