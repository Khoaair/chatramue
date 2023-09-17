'use client';
import styles from './page.module.scss';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className={styles.login}>
        <div className={styles.login__container}>
          <button
            className={styles.login__btn}
            onClick={() => signIn('google')}
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }

  return <div>logged in {session.user.email}</div>;
}
