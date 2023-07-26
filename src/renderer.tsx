import { createRoot } from 'react-dom/client';
import { App } from './renderer/index';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);

