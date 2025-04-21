function init() {
  import('./global.header-burger.js');     
  import('./nav.js');                      
  import('./history.js');                
  import('./achievements.js');       
  import('./players.js');                 
  import('./stadium.js');                    
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});