import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.nav_wrapper}>
          <li className={styles.logo}>
            <Link href='/' passHref>
              <Image
                alt="CreatorFy Logo"
                src="/logo.svg"
                width="200"
                height="100"
              />
            </Link>
          </li>
          <li className={styles.nav_elements}>
            <li className={styles.nav_item}>
              <Link href='/featured' passHref>
                <p>
                  Featured
                </p>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/business' passHref>
                <div>
                  Business
                </div>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href='/business' passHref>
                <div>
                   About
                </div>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <a>
                <div>
                  Login
                </div>
              </a>
            </li>
            <li className={styles.nav_photo}>
              <Image
                alt="Creator Nav Photo"
                src="/nav_photo.svg"
                width="50"
                height="50"
              />
            </li>
          </li>
          <span className={styles.nav_menu}>
            <Image
              alt="Nav Menu"
              src="/list.svg"
              width="40"
              height="40"
            />
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
