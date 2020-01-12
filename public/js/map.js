function buildMap() {
  const map = L.map("map", { zoomControl: false }).setView(
    [-32.941783, -60.653252],
    15
  );

  const zoomControlPosition = L.control.zoom({
    position: "bottomright"
  });

  zoomControlPosition.addTo(map);

  map.scrollWheelZoom.disable();

  const OpenStreetMap_Mapnik = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );

  OpenStreetMap_Mapnik.addTo(map);

  const marker = L.marker([-32.941916, -60.653186]).addTo(map);

  marker
    .bindPopup(
      '<p><b>Bv. Oroño 690</b><br>S2000 Rosario, Santa Fé<br>Esc. Superior De Comercio N° 49 "J.J. De Urquiza"</p>'
    )
    .openPopup();
}

export default buildMap;
