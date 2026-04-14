// map.js - minimal version without popup
document.addEventListener('DOMContentLoaded', function() {
  if (typeof L === 'undefined') return;
  
  document.querySelectorAll('.osm-map').forEach(function(mapEl) {
    const lat = parseFloat(mapEl.dataset.lat);
    const lng = parseFloat(mapEl.dataset.lng);
    const zoom = parseInt(mapEl.dataset.zoom);
    
    const map = L.map(mapEl.id).setView([lat, lng], zoom);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Just add the marker, no popup
    L.marker([lat, lng]).addTo(map);
  });
});
