document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the GitHub repository
    fetch('https://raw.githubusercontent.com/YuichiNishihara/yuichinishihara.github.io/main/top10gdp.json')
        .then(response => response.json())
        .then(data => {
            // Process the data and create the graph
            createGraph(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create the graph using Chart.js
    function createGraph(data) {
        const labels = data.map(country => country.name);
        const gdpValues = data.map(country => country.gdp);

        // Get the canvas element
        const ctx = document.getElementById('gdpChart').getContext('2d');

        // Create a bar chart
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'GDP (in billions)',
                    data: gdpValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
