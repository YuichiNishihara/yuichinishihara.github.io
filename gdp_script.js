document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with your own data)
    const countries = ['USA', 'China', 'Japan', 'Germany', 'India', 'UK', 'France', 'Brazil', 'Italy', 'Canada'];
    const years = [2000, 2005, 2010, 2015, 2020];
    const gdpData = {
        'USA': [10, 12, 14, 17, 21],
        'China': [4, 9, 15, 22, 28],
        'Japan': [5, 4, 5, 6, 6],
        'Germany': [3, 3, 3.5, 4, 4.5],
        'India': [1, 2, 3, 8, 10],
        'UK': [2, 2.5, 2.7, 2.8, 2.9],
        'France': [2, 2, 2, 2, 2],
        'Brazil': [1, 1.5, 2, 2.5, 2.8],
        'Italy': [2, 2, 1.8, 1.9, 2],
        'Canada': [1, 1.5, 1.8, 1.9, 2]
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
