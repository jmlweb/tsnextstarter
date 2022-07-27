import { FC } from 'react';

import styles from './Card.module.css';

export interface CardProps {
  title: string;
  href: string;
  excerpt: string;
}

const Card: FC<CardProps> = ({ title, href, excerpt }) => (
  <a href={href} className={styles.wrapper}>
    <h2 className={styles.title}>{title} &rarr;</h2>
    <p className={styles.excerpt}>{excerpt}</p>
  </a>
);

export default Card;
