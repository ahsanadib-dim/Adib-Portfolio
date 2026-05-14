import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.tsx'; // এখানে একটি বাড়তি ডট (.) যোগ করা হয়েছে
import '../index.css'; // এখানেও একটি বাড়তি ডট (.) যোগ করা হয়েছে

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
