'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  return (
    <div>
      <button className={styles.login__btn} onClick={() => signIn('google')}>
        Login with google
      </button>
    </div>
  );
};
export default Login;
