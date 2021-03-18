import { ReactElement, FC } from 'react';
import styles from './PageNotFound.module.scss';

/**
 * A nice little component to handle 404 errors
 * @returns {ReactElement}
 */

export const PageNotFound: FC = (): ReactElement => (
    <div id={styles.container}>Oops, we've searched far and wide, the page was not found.</div>
);
