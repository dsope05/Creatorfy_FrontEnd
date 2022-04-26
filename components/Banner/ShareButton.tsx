import { FC } from 'react';
import Image from 'next/image';
import shareButton from '../../public/share.svg';
import styles from '../../styles/Banner.module.css';
import { ShareProps } from '../utils/types';

const ShareButton: FC<ShareProps> = ({ url, text, title }) => {

    const sharing: Function = async (): Promise<void> => {
        if(navigator.share) {
            try{
                await navigator.share({ url, text, title })
                console.log('Shared!');
            } catch (error) {
                window.alert(error)
            }
        }
    }

    return(
        <div className={ styles.shareDiv }>
            <i className={`bi bi-share-fill creatorfy-pink ${styles.shareBtn}`}
                onClick={ (): Promise<void> => sharing()}
            ></i>

        </div>
    )
};

export default ShareButton;