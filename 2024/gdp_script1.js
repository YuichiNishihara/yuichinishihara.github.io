document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with your own data)
    const countries = ['USA', 'China', 'Japan', 'Germany', 'India', 'UK', 'France', 'Brazil', 'Italy', 'Canada'];
    const years = [2000, 2005, 2010, 2015, 2020];
    const gdpData = {
        'USA': [10, 13, 15, 18, 25],
        'China': [1.2, 2.3, 4.6, 11, 18],
        'Japan': [5.0, 4.8, 5.8, 4.4, 4.2],
        'Germany': [1.9, 2.8, 3.4, 3.4, 4.1],
        'India': [0.4, 0.8, 1.7, 2.1, 3.4],
        'UK': [1.7, 2.5, 2.5, 2.9, 3.1],
        'France': [1.4, 2.2, 2.6, 2.4, 2.8],
        'Brazil': [0.6, 0.9, 2.2, 1.8, 1.9],
        'Italy': [1.1, 1.9, 2.1, 1.8, 2],
        'Canada': [0.7, 1.2, 1.6, 1.6, 2.1]
    };

    // Prepare data for the chart
    const chartData = {
        labels: years,
        datasets: countries.map(country => ({
            label: country,
            data: gdpData[country],
            borderColor: getRandomColor(),
            fill: false
        }))
    };

    // Create the chart
    const ctx = document.getElementById('gdpChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    // Function to generate random colors for chart lines
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
