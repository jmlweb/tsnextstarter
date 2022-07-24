import { FC } from 'react';

import Card, { CardProps } from './Card';
import styles from './Cards.module.css';

interface CardsProps {
  items: ReadonlyArray<CardProps>;
}

const Cards: FC<CardsProps> = ({ items }) => (
  <div className={styles.wrapper}>
    {items.map((cardProps) => (
      <Card key={cardProps.title} {...cardProps} />
    ))}
  </div>
);

export default Cards;
