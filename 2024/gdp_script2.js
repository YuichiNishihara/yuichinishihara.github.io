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
        const uniqueYears = Array.from(new Set(data.map(item => item.year)));

        // Prepare data for each country
        const countryData = data.reduce((acc, item) => {
            if (!acc[item.country]) {
                acc[item.country] = { label: item.country, data: [] };
            }
            acc[item.country].data.push({ x: item.year, y: item.gdp });
            return acc;
        }, {});

        // Fill in missing data points with null
        Object.values(countryData).forEach(item => {
            for (const year of uniqueYears) {
                if (!item.data.some(dataPoint => dataPoint.x === year)) {
                    item.data.push({ x: year, y: null });
                }
            }
            // Sort the data points by year
            item.data.sort((a, b) => a.x - b.x);
        });

        // Get the canvas element
        const ctx = document.getElementById('gdpChart').getContext('2d');

        // Create a line chart with points
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: uniqueYears,
                datasets: Object.values(countryData).map(item => ({
                    label: item.label,  // Set the label for each dataset
                    data: item.data,
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
