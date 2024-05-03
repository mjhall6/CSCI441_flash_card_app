

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

    // Function to update flashcards based on search input
    const updateFlashcards = (searchInput) => {
      flashcards = data.reduce((acc, category) => {
        acc[category._id] = category.flashcards
          .map(flashcard => {
            return {
              category: category._id,
              question: flashcard.definition,
              answer: flashcard.answer
            };
          })
          .filter(flashcard => {
            return flashcard.question.toLowerCase().includes(searchInput.toLowerCase()) ||
              flashcard.answer.toLowerCase().includes(searchInput.toLowerCase());
          });

        return acc;
      }, {});

      // Check if flashcards is empty
      if (Object.values(flashcards).every(category => category.length === 0)) {
        document.getElementById("question").textContent = 'No data found';
        document.getElementById("answer").textContent = 'No data found';
      } else {
        // Display flashcards
        console.log('flashcards', flashcards);
        loadFlashcards();
      }
    };

    // Initial load
    updateFlashcards('');

    // Listen for input event on the search input
    const searchInput = document.querySelector('input[type="text"]');

    searchInput.addEventListener('input', () => {

      updateFlashcards(searchInput.value);
      updateFlashcardTopic(searchInput.value);

    });
  })
  .catch(error => console.log(error));

  function getCurrentFlashcards() {
    return currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
  }




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
  updateFlashcardTopic('');

  const currentFlashcards = getCurrentFlashcards();
  const maxCards = currentFlashcards.length; //max length of set


  document.getElementById("flashcardCounter").textContent = `1 / ${maxCards}`; // init values
  document.getElementById("progressBar").style.width = '0%';
}



function updateFlashcardTopic(searchInput) {
  if (searchInput) {
    document.querySelector(".h2").innerHTML = "<span style='color: blue;'>Search Results</span>" + " for " + "<span style='color: #1A4D2E;'>" + searchInput + "</span>";
    return;
  }
  const categorySelect = document.getElementById("category");
  const selectedCategoryOption = categorySelect.options[categorySelect.selectedIndex];
  document.querySelector(".h2").textContent = selectedCategoryOption.textContent;
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


//progress
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

  document.getElementById("flashcardCounter").textContent = `${currentFlashcardIndex + 1} / ${currentFlashcards.length}`;

  const progressPercent = ((currentFlashcardIndex + 1) / currentFlashcards.length) * 100;
  document.getElementById("progressBar").style.width = `${progressPercent}%`;
}

