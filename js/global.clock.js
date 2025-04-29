(function() {
    function startClock() {
      const el = document.getElementById('clock');
      if (!el || el.dataset.clockStarted) return;
      el.dataset.clockStarted = 'true';
  
      const pad = n => String(n).padStart(2, '0');
  
      function update() {
        const now = new Date();
        el.textContent = [
          pad(now.getHours()),
          pad(now.getMinutes()),
          pad(now.getSeconds())
        ].join(':');
      }
  
      update();                  
      setInterval(update, 1000); 
    }
  
    document.addEventListener('DOMContentLoaded', startClock);
    document.body.addEventListener('htmx:afterOnLoad', startClock);
  })();
  