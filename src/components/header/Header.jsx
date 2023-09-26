'use client';
import { signOut, useSession } from 'next-auth/react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === 'unauthenticated') {
    router.push('/login');
  }
  if (status === 'authenticated') {
    return (
      <div className={styles.header}>
        <div className={styles.header__container}>
          <Image
            src={data?.user?.image}
            alt='user avatar'
            width={32}
            height={32}
            className={styles.header__image}
          />
          <span className={styles.header__username}>{data?.user?.name}</span>
        </div>
        <button
          className={styles.header__logout}
          onClick={() => {
            signOut();
          }}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className={styles.header__icons}
          />
        </button>
      </div>
    );
  } else {
    return '';
  }
};
export default Header;
