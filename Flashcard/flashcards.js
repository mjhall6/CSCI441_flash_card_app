

const baseUrl = "http://localhost:5000/api";
let flashcards = {};
fetch(`${baseUrl}/flashcards`)
  .then(response => response.json())
  .then(data => {
    // Populate category options
    const categorySelect = document.getElementById("category");
    data.forEach(category => {
      const option = document.createElement("option");
      option.value = category._id; // Use the category _id as the option value
      option.textContent = category.category;
      categorySelect.appendChild(option);
    });

    // Store fetched flashcards data
    flashcards = data.reduce((acc, category) => {
      acc[category._id] = category.flashcards.map(flashcard => {
        return {
          category: category._id,
          question: flashcard.definition,
          answer: flashcard.answer
        };
      });
      return acc;
    }, {});

    console.log(flashcards);
    loadFlashcards(); // move initial load here to ensure data is loaded
  })
  .catch(error => console.log(error));

let currentFlashcardIndex = 0;
let currentCategory = "all";

// Function to load the current flashcard
function loadFlashcard() {
  const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
  const currentFlashcard = currentFlashcards[currentFlashcardIndex];
  document.getElementById("question").textContent = currentFlashcard.question;
  document.getElementById("answer").textContent = currentFlashcard.answer;
}

// Event listener to handle category change
const categorySelect = document.getElementById("category");
categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  loadFlashcards();
});

// Initial load
loadFlashcards();


function loadFlashcards() {
  currentCategory = document.getElementById("category").value;
  currentFlashcardIndex = 0;
  loadFlashcard();
  updateFlashcardTopic();
}

// //function to update flashcard topic

function updateFlashcardTopic() {
  const categorySelect = document.getElementById("category");
  const selectedCategoryOption = categorySelect.options[categorySelect.selectedIndex];
  document.querySelector(".h2").textContent = selectedCategoryOption.textContent;
}

function loadFlashcard() {
  const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
  if (currentFlashcards.length === 0) {
    console.log('No flashcards to display');
    return;
  }
  const currentFlashcard = currentFlashcards[currentFlashcardIndex];
  if (!currentFlashcard) {
    console.log(`No flashcard found at index ${currentFlashcardIndex}`);
    return;
  }
  document.getElementById("question").textContent = currentFlashcard.question;
  document.getElementById("answer").textContent = currentFlashcard.answer;
}
// //Event Listener to allow flipping flash cards by clicking

document.addEventListener("DOMContentLoaded", function () {
  const flashcard = document.querySelector(".flashcard");
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipCard");
  });
});

// // Function to get all flashcards if "All" category is selected
function getAllFlashcards() {
  return Object.values(flashcards).flat();
}

// // Function to show the previous flashcard
function prevFlashcard() {
  const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
  currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
  loadFlashcard();
}

// // Function to show the next flashcard
function nextFlashcard() {
  const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
  currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
  loadFlashcard();
}


