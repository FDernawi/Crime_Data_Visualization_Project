// Initialize map
const map = L.map("map").setView([38.9072, -77.0369], 11); // Centered on DC

// Add base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetch GeoJSON file and add to the map
d3.json("/static/Census_Tracts_in_2020.geojson").then(function(geoData) {

    // Log GeoJSON to inspect properties
    console.log("GeoJSON Data:", geoData);

    // Fetch data for crime and educational attainment
    d3.json("/api/tracts").then(function(data) {
        console.log("API Data:", data);

        // Create a lookup for tract data
        const tractData = {};
        data.forEach(d => {
            tractData[d.tract] = d;  // Store data by tract
        });
        const originalCenter = map.getCenter();
        // Add GeoJSON layer
        L.geoJson(geoData, {
            style: function(feature) {
                return {
                    color: "blue",
                    fillColor: "lightblue",
                    weight: 1,
                    fillOpacity: 0.5
                };
            },
            onEachFeature: function(feature, layer) {
                // Log properties to check key names
                console.log("Feature Properties:", feature.properties);

                // Highlight on hover
                layer.on("mouseover", function() {
                    layer.setStyle({ fillColor: "darkblue" });
                });
                layer.on("mouseout", function() {
                    layer.setStyle({ fillColor: "lightblue" });
                });

                // Show popup on click with detailed info
                layer.on("click", function() {
                    const tract = feature.properties.TRACT; // Updated to use 'TRACT'
                    const info = tractData[tract] || {};  // Get the corresponding data from tractData

                    // Create the popup content with detailed information
                    const popupContent = `
                        <h3>Census Tract: ${tract}</h3>
                        <p><strong>Total Population:</strong> ${info.total_population || "N/A"}</p>
                        <p><strong>Total No High School:</strong> ${info.total_no_high_school || "N/A"}</p>
                        <p><strong>Total High School Graduates:</strong> ${info.total_high_school_graduates || "N/A"}</p>
                        <p><strong>Total College Graduates:</strong> ${info.total_college_graduates || "N/A"}</p>
                        <p><strong>Total White Population:</strong> ${info.total_white_population || "N/A"}</p>
                        <p><strong>Total Black Population:</strong> ${info.total_black_population || "N/A"}</p>
                        <p><strong>Total American Indian Population:</strong> ${info.total_american_indian_population || "N/A"}</p>
                        <p><strong>Total Asian Population:</strong> ${info.total_asian_population || "N/A"}</p>
                        <p><strong>Total Native Hawaiian/Pacific Islander Population:</strong> ${info.total_native_hawaiian_pacific_islander_population || "N/A"}</p>
                        <p><strong>Total Other Population:</strong> ${info.total_other_population || "N/A"}</p>
                        <p><strong>Total Multiracial Population:</strong> ${info.total_multiracial_population || "N/A"}</p>
                        <p><strong>Total Hispanic Population:</strong> ${info.total_hispanic_population || "N/A"}</p>
                        <p><strong>White No High School:</strong> ${info.white_no_high_school || "N/A"}</p>
                        <p><strong>White High School Graduates:</strong> ${info.white_high_school_graduates || "N/A"}</p>
                        <p><strong>White College Graduates:</strong> ${info.white_college_graduates || "N/A"}</p>
                        <p><strong>Black No High School:</strong> ${info.black_no_high_school || "N/A"}</p>
                        <p><strong>Black High School Graduates:</strong> ${info.black_high_school_graduates || "N/A"}</p>
                        <p><strong>Black College Graduates:</strong> ${info.black_college_graduates || "N/A"}</p>
                        <p><strong>AIAN No High School:</strong> ${info.aian_no_high_school || "N/A"}</p>
                        <p><strong>AIAN High School Graduates:</strong> ${info.aian_high_school_graduates || "N/A"}</p>
                        <p><strong>AIAN College Graduates:</strong> ${info.aian_college_graduates || "N/A"}</p>
                        <p><strong>Asian No High School:</strong> ${info.asian_no_high_school || "N/A"}</p>
                        <p><strong>Asian High School Graduates:</strong> ${info.asian_high_school_graduates || "N/A"}</p>
                        <p><strong>Asian College Graduates:</strong> ${info.asian_college_graduates || "N/A"}</p>
                        <p><strong>NHPI No High School:</strong> ${info.nhpi_no_high_school || "N/A"}</p>
                        <p><strong>NHPI High School Graduates:</strong> ${info.nhpi_high_school_graduates || "N/A"}</p>
                        <p><strong>NHPI College Graduates:</strong> ${info.nhpi_college_graduates || "N/A"}</p>
                        <p><strong>Other No High School:</strong> ${info.other_no_high_school || "N/A"}</p>
                        <p><strong>Other High School Graduates:</strong> ${info.other_high_school_graduates || "N/A"}</p>
                        <p><strong>Other College Graduates:</strong> ${info.other_college_graduates || "N/A"}</p>
                        <p><strong>Multi No High School:</strong> ${info.multi_no_high_school || "N/A"}</p>
                        <p><strong>Multi High School Graduates:</strong> ${info.multi_high_school_graduates || "N/A"}</p>
                        <p><strong>Multi College Graduates:</strong> ${info.multi_college_graduates || "N/A"}</p>
                        <p><strong>Hisp No High School:</strong> ${info.hisp_no_high_school || "N/A"}</p>
                        <p><strong>Hisp High School Graduates:</strong> ${info.hisp_high_school_graduates || "N/A"}</p>
                        <p><strong>Hisp College Graduates:</strong> ${info.hisp_college_graduates || "N/A"}</p>
                    `;
                    console.log("Popup Content:", popupContent);  // Log the popup content
                    layer.bindPopup(popupContent).openPopup();
                });
                map.on('popupclose', () => {
                    console.log('Popup closed. Recentering the map...');
                    map.setView(originalCenter, map.getZoom());
                  });
            }
        }).addTo(map);
    });
});