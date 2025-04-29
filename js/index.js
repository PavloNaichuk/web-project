function init() {
    import('./dynamo.history.js');
    import('./dynamo.nav.js');
    import('./dynamo.stadium.js');
    import('./global.clock.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger=\"load\"], [data-hx-trigger=\"load\"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) {
        init();
    }
});
