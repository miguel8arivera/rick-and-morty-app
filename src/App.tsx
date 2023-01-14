import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/Router';
import './App.css';
import { NotificationProvider } from './context/notificatin.context';

function App() {
  return (
    <>
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </NotificationProvider>
    </>
  );
}

export default App;
