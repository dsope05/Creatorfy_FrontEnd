import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ShareButton from './ShareButton';
import diggButton from '../../public/diggButton.png';
import styles from '../../styles/Banner.module.css';
import { MainProps } from '../utils/types';

const MainBanner: FC<MainProps> = ({ title, onDigg, starScore, reviewScore, eventable, username }): JSX.Element => {
    let [url, setUrl] = useState<string>('');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const preposition: string = eventable ? 'with' : 'by';
    const fillStar: Function = (id: number): string => starScore >= id ? "★" : "☆";

    return(
        <div className={ styles.mainParent }>
            <div className={ styles.diggDiv }>
                <Image
                    layout='fixed'
                    height={37.08}
                    width={32.17}
                    className={ styles.diggIcon }
                    src={ diggButton }
                    alt='Digg Icon'
                    onClick={() => {
                        onDigg();
                    }}
                />
            </div>
            <div className={ styles.textDiv }>
                <p className={ styles.mainText }>
                    { `${ title } ` }
                    <span className={ styles.mainSpan }>
                        { `${ preposition } ${ username }` }
                    </span>
                </p>
            </div>
            <div className={ styles.statsAndShare }>
                {/* TODO: CHANGE P TAG TO CREATORFY STARS LOGIC*/}
                <p>
                    {`
                        ${ fillStar(1) }
                        ${ fillStar(2) }
                        ${ fillStar(3) }
                        ${ fillStar(4) }
                        ${ fillStar(5) }
                        ${ starScore }
                        (${ reviewScore }
                        reviews)
                    `}
                </p>
                <ShareButton
                    url={ url }
                    text={ `Check This Out! ${ title }` }
                    title={ title }
                />
            </div>
        </div>
    )
};

export default MainBanner;