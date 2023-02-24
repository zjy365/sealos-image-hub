import styles from './index.module.scss';
import { Nunito } from '@next/font/google';
import clsx from 'clsx';
import { useEffect } from 'react';
import { createSealosApp, sealosApp } from 'sealos-desktop-sdk';
const nunito = Nunito({ subsets: ['latin'] });

export default function Layout({ children }: any) {
  useEffect(() => {
    console.log('layout');
  }, []);
  // useEffect(() => {
  //   createSealosApp({
  //     appKey: 'App-Store'
  //   });
  //   return sealosApp.init();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     console.log(await sealosApp.getUserInfo());
  //   })();
  // }, []);
  // const { init } = useAppStore((state) => state);
  // const session = useSessionStore((s) => s.session);

  // useEffect(() => {
  //   (async () => {
  //     // Initialize, get user information, install application information, etc.
  //     await init();
  //   })();
  // }, [init]);

  // useEffect(() => {
  //   if (!window) {
  //     return;
  //   }
  //   const sdk = new MasterSDK(session);
  //   sdk.init();
  // }, [session]);

  return (
    <>
      <div className={clsx(styles.desktopContainer, nunito.className)}>
        <main className={clsx(styles.backgroundWrap, 'w-full h-full')}>{children}</main>
      </div>
    </>
  );
}
