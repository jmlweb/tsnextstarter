import { FC } from 'react';

import Card, { CardProps } from '@/components/Card';

import styles from './Cards.module.css';

interface CardsProps {
  items: ReadonlyArray<CardProps>;
}

const Cards: FC<CardsProps> = ({ items }) => (
  <div className={styles.wrapper} data-testid="cards">
    {items.map(({ title, excerpt, href }) => (
      <Card key={title} title={title} excerpt={excerpt} href={href} />
    ))}
  </div>
);

export default Cards;
