import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterLayout } from '../common/RouterLayout';
import { HomePage } from '../pages/home';
import { CharacterHome } from '../pages/home/character';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';

export const AppRouter: FC = function () {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/character/:characterId" element={<CharacterHome />} />
    </Routes>
  );
};
