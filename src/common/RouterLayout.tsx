import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const RouterLayout: FC = function () {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
