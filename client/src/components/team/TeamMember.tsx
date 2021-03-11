import React, { ReactElement, FC } from 'react';
import githubLogo from '../../assets/github-logo.svg';
<<<<<<< HEAD
import styles from './Team.module.scss';
=======

>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
interface Member {
    name: string;
    avatarURL: string;
    bio: string;
    role: string;
    githubURL: string;
}

const TeamMember: FC<Member> = ({ name, avatarURL, bio, role, githubURL }): ReactElement => (
<<<<<<< HEAD
    <div className={styles.member}>
        <img className={styles.avatar} src={avatarURL} alt={name} />
        <p className={styles.role}>{role}</p>
        <h3 className={styles.name}>{name}</h3>
=======
    <div className='member'>
        <img className='avatar' src={avatarURL} alt={name} />
        <p className='role'>{role}</p>
        <h3 className='name'>{name}</h3>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0

        <p className={styles.bio}>{bio}</p>
        <a href={githubURL}>
            <img className={styles.githubURL} src={githubLogo} alt='github link' />
        </a>
    </div>
);

export default TeamMember;
