import React, { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Banner.module.css';
import gravatar from '../../public/gravatar.png';
import { MiniProps } from "../utils/types";

const MiniBanner: FC<MiniProps> = ({ creatorText, creatorUrl, pageText, pageUrl }): JSX.Element => {
    return(
        <div className={ styles.miniHeader }>
            <div className={ styles.gravatarDiv }>
                <Image
                // Test gravatar is temporarily placed until gravatar url resource is found.
                    src={ gravatar }
                    alt='Gravatar Image'
                />
            </div>
            <small className={ styles.small }>
                <Link href={ creatorUrl }>
                    <a className={ styles.anchor }>
                        { `@${ creatorText }` }
                    </a>
                </Link>
                { " > " }
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