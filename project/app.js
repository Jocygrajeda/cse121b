

// Function to fetch exercise data from the Wger Workout Manager API
async function getExerciseData() {
    const response = await fetch('https://wger.de/api/v2/exercise/');
    const data = await response.json();
    return data.results;
  }
  
  // Function to populate the exercise dropdown
  function populateExerciseDropdown(exerciseData) {
    const exerciseDropdown = document.getElementById('exercise');
  
    exerciseData.forEach(exercise => {
      const option = document.createElement('option');
      option.value = exercise.id;
      option.text = exercise.name;
      exerciseDropdown.appendChild(option);
    });
  }
  
  // Function to handle user input and log workout
  function logWorkout() {
    const selectedExercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;
  
    // Perform workout logging logic here
    console.log('Exercise:', selectedExercise);
    console.log('Sets:', sets);
    console.log('Reps:', reps);
    console.log('Weight:', weight);
  
    // For simplicity, let's assume the data is logged successfully
  
    updateChart();
  }
  
  // Function to update the progress chart
  async function updateChart() {
    const userId = prompt('Enter user ID:'); 
  
    try {
      const workoutData = await getWorkoutData(userId);
      const chartData = prepareChartData(workoutData);
      renderChart(chartData);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  }
  
  // Function to handle goal setting
  function setGoal() {
    const goal = document.getElementById('goal').value;
    console.log('Fitness Goal:', goal);
  
    // Perform goal-setting logic here
  }
  
  // Function to create and render the progress chart
  function renderChart(chartData) {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
  // Initialize the app
  document.addEventListener('DOMContentLoaded', async () => {
    const exerciseData = await getExerciseData();
    populateExerciseDropdown(exerciseData);
  
    document.getElementById('log-workout-btn').addEventListener('click', logWorkout);
    document.getElementById('set-goal-btn').addEventListener('click', setGoal);
  });
  