// Initialize map
const map = L.map("map").setView([38.9072, -77.0369], 11); // Centered on DC

// Add base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create a div for the information window
const infoDiv = document.createElement('div');
infoDiv.id = 'info-window';
infoDiv.style.position = 'absolute';
infoDiv.style.top = '10px';
infoDiv.style.right = '10px';
infoDiv.style.width = '300px';
infoDiv.style.padding = '10px';
infoDiv.style.backgroundColor = 'white';
infoDiv.style.border = '1px solid #ccc';
infoDiv.style.borderRadius = '5px';
infoDiv.style.display = 'none'; // Hidden by default
infoDiv.style.zIndex = '1000'; // Ensure it's above the map
document.body.appendChild(infoDiv);

// Function to show the information window
function showInfoWindow(content) {
    infoDiv.innerHTML = content;
    infoDiv.style.display = 'block';
}

// Function to hide the information window
function hideInfoWindow() {
    infoDiv.style.display = 'none';
}

// Add close button to the info window
const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.style.marginTop = '10px';
closeButton.style.padding = '5px';
closeButton.style.cursor = 'pointer';
closeButton.onclick = hideInfoWindow;
infoDiv.appendChild(closeButton);

// Fetch GeoJSON file and add to the map
d3.json("/static/Census_Tracts_in_2020.geojson").then(function (geoData) {
    console.log("GeoJSON Data:", geoData);

    // Fetch data for crime and census
    d3.json("/api/tracts").then(function (data) {
        console.log("API Data:", data);

        // Create a lookup for tract data
        const tractData = {};
        data.forEach(d => {
            tractData[d.tract] = d; // Store data by tract
        });

        // Add GeoJSON layer
        L.geoJson(geoData, {
            style: function (feature) {
                return {
                    color: "blue",
                    fillColor: "lightblue",
                    weight: 1,
                    fillOpacity: 0.5,
                };
            },
            onEachFeature: function (feature, layer) {
                const tract = feature.properties.TRACT; // Use 'TRACT' from GeoJSON

                // Highlight on hover
                layer.on("mouseover", function () {
                    layer.setStyle({ fillColor: "darkblue" });
                });
                layer.on("mouseout", function () {
                    layer.setStyle({ fillColor: "lightblue" });
                });

                // Show selection popup on click
                layer.on("click", function () {
                    const selectionPopup = `
                        <h3>Census Tract: ${tract}</h3>
                        <p>Select Data to View:</p>
                        <button id="crime-data-btn">Crime Data</button>
                        <button id="census-data-btn">Census Data</button>
                        <button id="edu-data-btn">Educational Attainment</button>
                    `;

                    // Show the selection window
                    showInfoWindow(selectionPopup);

                    // Add event listeners for buttons
                    document.getElementById("crime-data-btn").addEventListener("click", function () {
                        layer.setStyle({ fillColor: "red" });

                        const crimePopupContent = `
                            <h3>Census Tract: ${tract}</h3>
                            <p><strong>Total Population:</strong> ${tractData[tract]?.total_population || "N/A"}</p>
                            <p><strong>Arson Count:</strong> ${tractData[tract]?.arson_count || "N/A"}</p>
                            <p><strong>Assault with Dangerous Weapon Count:</strong> ${tractData[tract]?.assault_with_dangerous_weapon_count || "N/A"}</p>
                            <p><strong>Burglary Count:</strong> ${tractData[tract]?.burglary_count || "N/A"}</p>
                            <p><strong>Homicide Count:</strong> ${tractData[tract]?.homicide_count || "N/A"}</p>
                            <p><strong>Motor Vehicle Theft Count:</strong> ${tractData[tract]?.motor_vehicle_theft_count || "N/A"}</p>
                            <p><strong>Robbery Count:</strong> ${tractData[tract]?.robbery_count || "N/A"}</p>
                            <p><strong>Sex Abuse Count:</strong> ${tractData[tract]?.sex_abuse_count || "N/A"}</p>
                            <p><strong>Theft from Auto Count:</strong> ${tractData[tract]?.theft_from_auto_count || "N/A"}</p>
                            <p><strong>Theft Other Count:</strong> ${tractData[tract]?.theft_other_count || "N/A"}</p>
                        `;
                        showInfoWindow(crimePopupContent);
                    });

                    document.getElementById("census-data-btn").addEventListener("click", function () {
                        layer.setStyle({ fillColor: "blue" });

                        const censusPopupContent = `
                            <h3>Census Tract: ${tract}</h3>
                            <p><strong>Total Population:</strong> ${tractData[tract]?.total_population || "N/A"}</p>
                            <p><strong>Total White Population:</strong> ${tractData[tract]?.total_white_population || "N/A"}</p>
                            <p><strong>Total Black Population:</strong> ${tractData[tract]?.total_black_population || "N/A"}</p>
                            <p><strong>Total American Indian Population:</strong> ${tractData[tract]?.total_american_indian_population || "N/A"}</p>
                            <p><strong>Total Asian Population:</strong> ${tractData[tract]?.total_asian_population || "N/A"}</p>
                            <p><strong>Total Native Hawaiian/Pacific Islander Population:</strong> ${tractData[tract]?.total_native_hawaiian_pacific_islander_population || "N/A"}</p>
                            <p><strong>Total Other Population:</strong> ${tractData[tract]?.total_other_population || "N/A"}</p>
                            <p><strong>Total Multiracial Population:</strong> ${tractData[tract]?.total_multiracial_population || "N/A"}</p>
                            <p><strong>Total Hispanic Population:</strong> ${tractData[tract]?.total_hispanic_population || "N/A"}</p>
                        `;
                        showInfoWindow(censusPopupContent);
                    });

                    document.getElementById("edu-data-btn").addEventListener("click", function () {
                        layer.setStyle({ fillColor: "green" });

                        const eduPopupContent = `
                            <h3>Census Tract: ${tract}</h3>
                            <p><strong>White No High School:</strong> ${tractData[tract]?.white_no_high_school || "N/A"}</p>
                            <p><strong>White High School Graduates:</strong> ${tractData[tract]?.white_high_school_graduates || "N/A"}</p>
                            <p><strong>White College Graduates:</strong> ${tractData[tract]?.white_college_graduates || "N/A"}</p>
                            <p><strong>Black No High School:</strong> ${tractData[tract]?.black_no_high_school || "N/A"}</p>
                            <p><strong>Black High School Graduates:</strong> ${tractData[tract]?.black_high_school_graduates || "N/A"}</p>
                            <p><strong>Black College Graduates:</strong> ${tractData[tract]?.black_college_graduates || "N/A"}</p>
                            <p><strong>AIAN No High School:</strong> ${tractData[tract]?.aian_no_high_school || "N/A"}</p>
                            <p><strong>AIAN High School Graduates:</strong> ${tractData[tract]?.aian_high_school_graduates || "N/A"}</p>
                            <p><strong>AIAN College Graduates:</strong> ${tractData[tract]?.aian_college_graduates || "N/A"}</p>
                            <p><strong>Asian No High School:</strong> ${tractData[tract]?.asian_no_high_school || "N/A"}</p>
                            <p><strong>Asian High School Graduates:</strong> ${tractData[tract]?.asian_high_school_graduates || "N/A"}</p>
                            <p><strong>Asian College Graduates:</strong> ${tractData[tract]?.asian_college_graduates || "N/A"}</p>
                            <p><strong>NHPI No High School:</strong> ${tractData[tract]?.nhpi_no_high_school || "N/A"}</p>
                            <p><strong>NHPI High School Graduates:</strong> ${tractData[tract]?.nhpi_high_school_graduates || "N/A"}</p>
                            <p><strong>NHPI College Graduates:</strong> ${tractData[tract]?.nhpi_college_graduates || "N/A"}</p>
                            <p><strong>Other No High School:</strong> ${tractData[tract]?.other_no_high_school || "N/A"}</p>
                            <p><strong>Other High School Graduates:</strong> ${tractData[tract]?.other_high_school_graduates || "N/A"}</p>
                            <p><strong>Other College Graduates:</strong> ${tractData[tract]?.other_college_graduates || "N/A"}</p>
                            <p><strong>Multi No High School:</strong> ${tractData[tract]?.multi_no_high_school || "N/A"}</p>
                            <p><strong>Multi High School Graduates:</strong> ${tractData[tract]?.multi_high_school_graduates || "N/A"}</p>
                            <p><strong>Multi College Graduates:</strong> ${tractData[tract]?.multi_college_graduates || "N/A"}</p>
                            <p><strong>Hisp No High School:</strong> ${tractData[tract]?.hisp_no_high_school || "N/A"}</p>
                            <p><strong>Hisp High School Graduates:</strong> ${tractData[tract]?.hisp_high_school_graduates || "N/A"}</p>
                            <p><strong>Hisp College Graduates:</strong> ${tractData[tract]?.hisp_college_graduates || "N/A"}</p>
                        `;
                        showInfoWindow(eduPopupContent);
                    });
                });
            },
        }).addTo(map);
    });
});