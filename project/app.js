document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '96cad3fe1c38a90b243f058d96b32b3124757cf5';
  const apiUrl = 'https://wger.de/api/v2/exercise/';

  const exerciseSelect = document.getElementById('exercise');
  const logWorkoutBtn = document.getElementById('log-workout-btn');
  const durationInput = document.getElementById('duration');
  const progressChart = document.getElementById('progress-chart').getContext('2d');

  let chartData = {
    labels: generateLabels(),
    datasets: [{
      label: 'Minutes of Exercise',
      data: Array(30).fill(0),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  async function fetchExercises() {
    const headers = {
      'Authorization': `Token ${apiKey}`,
    };

    try {
      const response = await fetch(apiUrl, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const exercises = await response.json();

      exercises.results.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise.id;
        option.text = exercise.name;
        exerciseSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  }

  fetchExercises();

  logWorkoutBtn.addEventListener('click', function () {
    const selectedExerciseId = exerciseSelect.value;
    const duration = parseInt(durationInput.value);

    // Log workout or update progress data here
    console.log('Selected Exercise ID:', selectedExerciseId);
    console.log('Duration:', duration);

    // Update chart data based on user input
    const dayIndex = new Date().getDate() - 1; // Get the current day index
    chartData.datasets[0].data[dayIndex] = duration;

    // Update the chart
    updateChart();
  });

  function updateChart() {

    if (progressChart.chart) {
      progressChart.chart.destroy();
    }
    const config = {
      type: 'bar',
      data: chartData,
    };

    progressChart.chart = new Chart(progressChart, config);
  }

  function generateLabels() {
    const labels = [];
    for (let i = 1; i <= 30; i++) {
      labels.push(`Day ${i}`);
    }
    return labels;
  }
});
