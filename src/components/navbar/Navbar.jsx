import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <aside className={styles.nav}>
      <Link href={'/'} className={styles.nav__logo}>
        <Image
          src='https://chatramue.com/cdn/shop/files/ChaTraMue2_a1f8934c-a3cc-46da-a2be-58cc9f716369_360x.png?v=1613698723'
          alt=''
          fill={true}
          className={styles.logo__image}
        />
      </Link>
      <nav>
        <Link href={'/dashboard'}>
          <FontAwesomeIcon icon={faHouse} className={styles.nav__icons} />
          Dashboard
        </Link>
      </nav>
    </aside>
  );
};
export default Navbar;
