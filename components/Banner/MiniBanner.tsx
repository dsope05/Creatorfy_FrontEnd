import React, { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Banner.module.css';
import { MiniProps } from "../utils/types";
// import gravatar from '../../public/gravatar.png';

const MiniBanner: FC<MiniProps> = ({ creatorText, creatorUrl, pageText, pageUrl, gravatarUrl }): JSX.Element => {
    console.log(gravatarUrl)
    return(
        <div className={ styles.miniHeader }>
            <div className={ styles.gravatarDiv }>
                <Image
                    src={ gravatarUrl }
                    alt='Gravatar Image'
                    width={50}
                    height={50}
                />
            </div>
            <small className={ styles.small }>
                <Link href={ creatorUrl }>
                    <a className={ styles.anchor }>
                        { `@${ creatorText }` }
                    </a>
                </Link>
                <span className={styles.divider}>{" > "}</span>
                <Link href={ pageUrl }>
                    <a  className={ styles.anchor }>
                        { pageText }
                    </a>
                </Link>
            </small>
        </div>
    )
}

export default MiniBanner;