import { createRoot } from 'react-dom/client';
import { App } from './renderer/index';

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.API.chrome()}), Node.js (v${window.API.node()}), and Electron (v${window.API.electron()})`;

const root = createRoot(document.getElementById('root'));
root.render(<App/>);

