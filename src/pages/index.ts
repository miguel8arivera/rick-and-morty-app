import React from 'react';

export { HomePage } from './home';

export const LoginPage = React.lazy(() => import('./login'));
export const RegisterPage = React.lazy(() => import('./register'));
export const CharacterPage = React.lazy(() => import('./character'));
