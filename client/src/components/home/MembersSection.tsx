import { ReactElement, FC } from 'react';

import styles from './MembersSection.module.scss';

const MembersSection: FC = (): ReactElement => (
    <div id={styles.wrapper}>
        <div id={styles.heading}>Members (8)</div>
        <div id={styles.members}>
            <div>bidex</div>
            <div>Tekipeps</div>
            <div>Cindy Ebirim</div>
            <div>Seun</div>
            <div>Daghost</div>
            <div>Emedith</div>
            <div>Timberon</div>
            <div>Vikky</div>
        </div>
    </div>
);

export default MembersSection;
