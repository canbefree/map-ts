// 913ca1ff7628b102d0be9624126a5ae9

import './scss/app.scss';
// import gendata from "./data/geo";

import App from './App';
import { createRoot } from 'react-dom/client';


let container = document.getElementById('app')
const root = createRoot(container!);
root.render(new App({}).render());

