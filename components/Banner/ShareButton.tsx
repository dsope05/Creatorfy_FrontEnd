import { FC } from 'react';
import Image from 'next/image';
import shareButton from '../../public/shareButton.png';
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
            <Image
                layout='fixed'
                className={ styles.shareBtn }
                height={ 27 }
                width={ 27 }
                src={ shareButton }
                alt='share-button'
                onClick={ (): Promise<void> => sharing() }
            />
        </div>
    )
};

export default ShareButton;