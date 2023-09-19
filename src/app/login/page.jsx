'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') router.push('/');

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <button className={styles.login__btn} onClick={() => signIn('google')}>
          Login with google
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
