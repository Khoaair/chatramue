'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxArchive,
  faGear,
  faHouse,
  faList,
  faShop,
} from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.nav}>
      <Link href={'/'} className={styles.nav__admin}>
        <FontAwesomeIcon icon={faShop} className={styles.admin__icons} />
        <span>Chatramue Admin</span>
      </Link>
      <nav className={styles.nav__menu}>
        <Link
          href={'/'}
          className={`${
            pathname === '/'
              ? `${styles.nav__items} ${styles.nav__active}`
              : styles.nav__items
          }`}
        >
          <FontAwesomeIcon icon={faHouse} className={styles.nav__icons} />
          <span>Dashboard</span>
        </Link>
        <Link
          href={'/products'}
          className={`${
            pathname === '/products'
              ? `${styles.nav__items} ${styles.nav__active}`
              : styles.nav__items
          }`}
        >
          <FontAwesomeIcon icon={faBoxArchive} className={styles.nav__icons} />
          <span>Products</span>
        </Link>
        <Link
          href={'/orders'}
          className={`${
            pathname === '/orders'
              ? `${styles.nav__items} ${styles.nav__active}`
              : styles.nav__items
          }`}
        >
          <FontAwesomeIcon icon={faList} className={styles.nav__icons} />
          <span>Orders</span>
        </Link>
        <Link
          href={'/settings'}
          className={`${
            pathname === '/settings'
              ? `${styles.nav__items} ${styles.nav__active}`
              : styles.nav__items
          }`}
        >
          <FontAwesomeIcon icon={faGear} className={styles.nav__icons} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};
export default Navbar;
