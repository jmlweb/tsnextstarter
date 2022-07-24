import { FC } from 'react';

import styles from './Cards.module.css';

export interface CardProps {
  title: string;
  href: string;
  excerpt: string;
}

const Card: FC<CardProps> = ({ title, href, excerpt }) => (
  <a href={href} className={styles.card}>
    <h2 className={styles.cardTitle}>{title} &rarr;</h2>
    <p className={styles.cardExcerpt}>{excerpt}</p>
  </a>
);

export default Card;
