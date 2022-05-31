import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vasr.styl';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
