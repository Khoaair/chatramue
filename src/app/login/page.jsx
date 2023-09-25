'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === 'authenticated') router.push('/');
  return (
    <div className={styles.login}>
      <button className={styles.login__btn} onClick={() => signIn('google')}>
        Login with google
      </button>
    </div>
  );
};
export default Login;
