import { useEffect } from 'react';
import { authService } from '@/services';
import './App.css';

function App() {
  useEffect(() => {
    authService.signin();
  }, []);

  return <></>;
}

export default App;
