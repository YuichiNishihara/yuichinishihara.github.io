document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the GitHub repository
    fetch('https://raw.githubusercontent.com/YuichiNishihara/yuichinishihara.github.io/main/top10gdp.json')
        .then(response => response.json())
        .then(data => {
            // Process the data and create the line graph
            createLineGraph(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create the line graph using Chart.js
    function createLineGraph(data) {
        // Extract unique years from the data
        const uniqueYears = Array.from(new Set(data.map(country => country.year)));

        // Prepare data for each country
        const countryData = data.reduce((acc, country) => {
            if (!acc[country.name]) {
                acc[country.name] = { label: country.name, data: [] };
            }
            acc[country.name].data.push({ x: country.year, y: country.gdp });
            return acc;
        }, {});

        // Fill in missing data points with null
        Object.values(countryData).forEach(country => {
            for (const year of uniqueYears) {
                if (!country.data.some(dataPoint => dataPoint.x === year)) {
                    country.data.push({ x: year, y: null });
                }
            }
            // Sort the data points by year
            country.data.sort((a, b) => a.x - b.x);
        });

        // Get the canvas element
        const ctx = document.getElementById('gdpChart').getContext('2d');

        // Create a line chart with points
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: uniqueYears,
                datasets: Object.values(countryData).map(country => ({
                    label: country.label,
                    data: country.data,
                    fill: false,
                })),
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 6,
                    },
                },
            },
        });
    }
});
