import { useState } from 'react';

import { Check2Square } from 'react-bootstrap-icons';
import styles from '../../styles/ServiceTiersCard.module.scss';

interface TierDescription {
  title: string;
  description: string;
  price: string;
  currency: string;
  addOns: string[];
}

interface SerivceTierListProps {
  title: string;
  addOns: string[];
  active: boolean;
}

function ServiceTierFeatures({ title, addOns, active }: SerivceTierListProps) {
  if (!addOns) {
    return <div key={title} />;
  }
  return (
    <div key={title}>
      <strong>{title}:</strong>
      <ul className={styles.tiersList}>
        {addOns.map((f, idx) => (
          <li
            className={`${styles.tiersFeatures} ${
              active ? styles.activeTiersFeatures : ''
            }`}
            key={idx}
          >
            <Check2Square className={styles.tiersList2} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatTierTitle(title: string): string {
  if (!title) return title;
  return title[0].toUpperCase() + title.substring(1).toLowerCase();
}

export default function ServiceTiersCard(props: { tiers: TierDescription[] }) {
  const [tierIdx, setTierIdx] = useState(0);

  const selectedTier = props.tiers[tierIdx];

  return (
    <div>
      <div className={styles.tiersContainer}>
        {props.tiers.map((t, tIdx) => (
          <div
            className={`${styles.tiersHeader}
              ${tIdx === tierIdx ? styles.activeTierHeader : ''}`}
            key={t.title}
            onClick={() => setTierIdx(tIdx)}
          >
            {formatTierTitle(t.title)}
          </div>
        ))}
      </div>
      <div className={styles.tiersContent}>
        <div className={styles.descriptionAndCost}>
          <p>
            <strong>{selectedTier.description}</strong>
          </p>
          <p>
            <span className={styles.tierCost}>{`$${selectedTier.price}`}</span>
          </p>
        </div>
        {props.tiers.map((t, tIdx) => (
          <ServiceTierFeatures
            title={formatTierTitle(t.title)}
            addOns={t.addOns}
            active={tIdx <= tierIdx}
            key={t.title}
          />
        ))}
        <button
          type="button"
          className={`btn btn-primary ${styles.footerButton}`}
        >
          Continue to Schedule
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${styles.footerButton}`}
        >
          <strong>Send a Message to Kelsey</strong>
        </button>
      </div>
    </div>
  );
}
