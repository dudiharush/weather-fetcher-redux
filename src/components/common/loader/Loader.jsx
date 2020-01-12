import React from 'react';
import sun from 'app/assets/png/sun.png';
import styles from './Loader.scss';

export const Loader = () => <img src={sun} className={styles.rotating} />;
