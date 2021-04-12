import { ReactElement, FC } from 'react';
import Avatar from '../../components/reusable/Avatar';
import { StyledUser, StyledUsersPage } from './UsersPage.styled';

const users = [
    {
        name: 'bayo',
        posts: 23,
        isOnline: true
    },
    {
        name: 'mike',
        posts: 54,
        isOnline: false
    },
    {
        name: 'paul',
        posts: 45,
        isOnline: false
    },
    {
        name: 'lordmemes',
        posts: 36,
        isOnline: true
    }
];

interface UserParam {
    name: string;
    posts: number;
    isOnline: boolean;
}

const User: FC<UserParam> = ({ name, posts, isOnline }): ReactElement => {
    // if (!user.isAdmin) redirect to the 404 page or something
    return (
        <StyledUser>
            <Avatar alt='img' size={40} src='' />
            <span className='name'>{name}</span>
            <span className='posts'>posts: {posts}</span>
            <span className='status'>status: {isOnline ? 'online' : 'offline'}</span>
            <div className='actions'>
                <div className='mute-user'>Mute user</div>
                <div className='ban-user'>Ban user</div>
            </div>
        </StyledUser>
    );
};

export const UsersPage: FC = (): ReactElement => {
    return (
        <StyledUsersPage>
            {users.map((user) => (
                <User name={user.name} posts={user.posts} isOnline={user.isOnline} />
            ))}
        </StyledUsersPage>
    );
};
