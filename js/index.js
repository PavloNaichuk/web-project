// js/index.js
import { initHistorySlider } from './dynamo.history.js';
import './dynamo.nav.js';
import './dynamo.stadium.js';
import './global.clock.js';

document.addEventListener('DOMContentLoaded', () => {
  initHistorySlider();
});

document.body.addEventListener('htmx:afterSwap', (e) => {
  if (e.detail.target.id === 'history') {
    initHistorySlider();
  }
});
