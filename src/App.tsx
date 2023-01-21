import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/Router';
import './App.css';
import { NotificationProvider } from './context/notificatin.context';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <NotificationProvider>
        <BrowserRouter>
          <Suspense fallback={'loading...'}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </NotificationProvider>
    </>
  );
}

export default App;
