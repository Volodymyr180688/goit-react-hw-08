import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import style from './Layout.module.css';


export const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
};