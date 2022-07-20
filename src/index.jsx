import { createRoot } from 'react-dom/client'; 

import App from './App';
import AppProvider from './context';


const root = createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);