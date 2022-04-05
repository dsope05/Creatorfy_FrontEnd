import React, { FC } from "react";
import Image from 'next/image';
import styles from '../../styles/Banner.module.css';
import gravatar from '../../public/gravatar.png';
import { MiniProps } from "../utils/types";

const MiniBanner: FC<MiniProps> = ({creatorText, creatorUrl, pageText, pageUrl}): JSX.Element => {
    return(
        <div className={styles.miniHeader}>
            <div className={styles.gravatarDiv}>
                <Image
                // Test gravatar is temporarily placed until gravatar url resource is found.
                    src={gravatar}
                    alt='Gravatar Image'
                />
            </div>
            <small className={styles.small}>
                <a
                    href={creatorUrl}
                    className={styles.anchor}>
                        {creatorText}
                </a>
                {" > "}
                <a
                    href={pageUrl}
                    className={styles.anchor}>
                    {pageText}
                </a>
            </small>
        </div>
    )
}

export default MiniBanner;