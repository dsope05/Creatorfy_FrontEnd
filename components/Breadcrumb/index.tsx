import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../../styles/Breadcrumb.module.css';
import { BreadcrumbLink } from '../utils/types';

interface BreadcrumbProps {
  links: BreadcrumbLink[];
  gravatarUrl?: string;
}

interface BreadcrumbLinkProps {
  text: string;
  url?: string;
  hasCarrot?: boolean;
};

const BreadcrumbLink = ({ url, text, hasCarrot }: BreadcrumbLinkProps) => (
  <>
    <span className={styles.breadcrumbLink}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
    </span>
    {hasCarrot && <span className={styles.breadcrumbCarrot}>&gt;</span>}
  </>
);

const Breadcrumb = ({ links, gravatarUrl = '' }: BreadcrumbProps) => (
  <article className={styles.breadcrumbContainer}>
    {gravatarUrl.length !== 0 && (
      <Image
        aria-hidden
        alt="gravatar image"
        className={styles.breadcrumbImage}
        src={gravatarUrl}
        width="36"
        height="36"
      />
    )}
    <div className={styles.breadcrumbLinksContainer}>
      {links.map(({ text, url }, i) => (
        <BreadcrumbLink
          key={text}
          text={text}
          url={url}
          hasCarrot={i !== links.length - 1}
        />
      ))}
    </div>
  </article>
);

export default Breadcrumb;
