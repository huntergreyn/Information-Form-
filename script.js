
// Select form elements (combines both naming conventions)
const form = document.querySelector('.form');
const inputName = document.querySelector('#name');
const inputNumber = document.querySelector("#number");
const inputScore = document.querySelector('#score');
const submitButton = document.querySelector("#submit"); // Using submitButton for clarity

// Function to handle form submission and data storage
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get input values
  const nameValue = inputName.value.trim(); // Trim leading/trailing whitespace
  const numberValue = inputNumber.value.trim();
  const scoreValue = inputScore.value.trim();

  // Validate input (combined logic from both responses)
  if (!nameValue,  !numberValue,  !scoreValue) {
    alert('Please fill out all the fields!');
    return; // Exit function if validation fails
  }

  // Create user data object (same logic)
  const userData = {
    name: nameValue,
    number: numberValue,
    score: scoreValue,
    id: Date.now() + Math.floor(Math.random() * 100), // Unique identifier
  };

  // Save data to local storage (using getLocal function)
  saveToLocalStorage(userData);

  // Display results (use getElementById for clarity)
  const displayResult = document.getElementById('display-result'); // Assuming an element exists with this ID
  if (displayResult) { // Check if element exists before modifying
    displayResult.textContent = formatUserData(userData);
    displayResult.style.display = 'block';
    displayResult.style.marginTop = '30px';
    displayResult.style.fontSize = '25px';
    displayResult.style.color = "purple";
  } else {
    console.warn('Element with ID "display-result" not found. Results not displayed.');
  }

  // Clear form fields after successful submission
  form.reset();
}

// Function to format user data for display (combines and improves formatting)
function formatUserData(userData) {
  return `Name : ${userData.name}\nNumber: ${userData.number}\nScore= ${userData.score}\nID: {userData.id}`;
}

// Function to save user data to local storage (similar logic)
function saveToLocalStorage(userData) {
  // Get existing data or create an empty array
  const existingData = JSON.parse(localStorage.getItem('userNotes')) || [];

  // Push new data to existing data
  existingData.push(userData);

  // Store updated data in local storage
  localStorage.setItem('userNotes', JSON.stringify(existingData));
}

// Prevent form submission from refreshing the page
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = ''; // Optional for some older browsers
});

// Add event listener to submit button
submitButton.addEventListener('click', handleFormSubmit);
          