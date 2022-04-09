import React, { useState } from 'react';

import { Check2Square } from 'react-bootstrap-icons';
import styles from '../../styles/ServiceTiersCard.module.scss';

interface TierDescription {
  rank: string;
  money: string;
  description: string;
  features: string[];
}

interface SerivceTierListProps {
  rank: string;
  features: string[];
  active: boolean;
}

function ServiceTierFeatures({ rank, features, active }: SerivceTierListProps) {
  return (
    <div key={rank}>
      <strong>{rank}:</strong>
      <ul className={styles.tiersList}>
        {features.map((f, idx) => (
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

export default function ServiceTiersCard(props) {
  const [tierIdx, setTierIdx] = useState(0);

  const tiers: TierDescription[] = [
    {
      rank: 'Bronze',
      money: '$50',
      description:
        'I will play a 15 minute practice session of Smash on the Switch',
      features: ['Discord call during playtime', 'Your choice of 1 character'],
    },
    {
      rank: 'Silver',
      money: '$75',
      description:
        'I will play a 30 minute practice session of Smash on the Switch',
      features: [
        'I will stream our session on Twitch',
        'I will give you handwritten notes about your performance',
      ],
    },
    {
      rank: 'Gold',
      money: '$100',
      description:
        'I will play a one hour practice session of Smash on the Switch',
      features: [
        'I will review vods of your playstyle beforehand, and have notes ready',
      ],
    },
  ];

  const selectedTier = tiers[tierIdx];

  return (
    <div>
      <div className={styles.tiersContainer}>
        {tiers.map((t, tIdx) => (
          <div
            className={`${styles.tiersHeader}
              ${tIdx === tierIdx ? styles.activeTierHeader : ''}`}
            key={t.rank}
            onClick={() => setTierIdx(tIdx)}
          >
            {t.rank}
          </div>
        ))}
      </div>
      <div className={styles.tiersContent}>
        <div className={styles.descriptionAndCost}>
          <p>
            <strong>{selectedTier.description}</strong>
          </p>
          <p>
            <span className={styles.tierCost}>{selectedTier.money}</span>
          </p>
        </div>
        {tiers.map((t, tIdx) => (
          <ServiceTierFeatures
            rank={t.rank}
            features={t.features}
            active={tIdx <= tierIdx}
            key={t.rank}
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
