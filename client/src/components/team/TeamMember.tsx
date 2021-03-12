import { ReactElement, FC } from 'react';
import githubLogo from '../../assets/github-logo.svg';
import styles from './Team.module.scss';
interface Member {
    name: string;
    avatarURL: string;
    bio: string;
    role: string;
    githubURL: string;
}

const TeamMember: FC<Member> = ({ name, avatarURL, bio, role, githubURL }): ReactElement => (
    <div className={styles.member}>
        <img className={styles.avatar} src={avatarURL} alt={name} />
        <p className={styles.role}>{role}</p>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.bio}>{bio}</p>
        <a href={githubURL}>
            <img className={styles.githubURL} src={githubLogo} alt='github link' />
        </a>
    </div>
);

export default TeamMember;
