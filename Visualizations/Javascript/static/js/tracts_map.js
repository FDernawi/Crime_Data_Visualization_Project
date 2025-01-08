// Initialize the map
let map = L.map("map", {
    center: [38.9072, -77.0369],  // Coordinates for Washington DC
    zoom: 12
});

// Add a tile layer (base map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load the GeoJSON file and add to the map
d3.json("static/Census_Tracts_in_2020.geojson").then(function (data) {
    // Style for the tracts
    function style(feature) {
        return {
            fillColor: "blue",
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.6
        };
    }

    // Highlight on hover
    function highlightFeature(e) {
        let layer = e.target;
        layer.setStyle({
            weight: 3,
            color: '#666',
            fillOpacity: 0.9
        });
        layer.bringToFront();
    }

    // Reset highlight
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    // Zoom to feature
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    // Add interaction
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });

        // Add popup with tract details
        layer.bindPopup(`<h3>Tract: ${feature.properties.TRACTCE}</h3>`);
    }

    // Add GeoJSON layer to map
    let geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
});