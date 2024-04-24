const FlashCard = require("../models/Flashcard");

// const FlashCardsData = {
//   category1: [
//     { question: "Definition of an algorithm", answer: "An algorithm is a sequence of unambiguous instructions for solving a problem (for obtaining a required output for any legitimate input in a finite amount of time)" },
//     { question: "What is time efficiency?", answer: "Time efficiency is how fast an algorithm runs" },

//   ],
//   category2: [
//     { question: "What is a data structure?", answer: "Data structures refers to the way data is organized and manipulated. It seeks to find ways to make data access more efficient. When dealing with data structure, we not only focus on one piece of data, but rather different set of data and how they can relate to one another in an organized manner." },
//     { question: "Differentiate file structure from storage structure.", answer: "Basically, the key difference is the memory area that is being accessed. When dealing with the structure that resides the main memory of the computer system, this is referred to as storage structure. When dealing with an auxiliary structure, we refer to it as file structures." },
//     { question: "When is a binary search best applied?", answer: "A binary search is an algorithm that is best applied to search a list when the elements are already in order or sorted. The list is search starting in the middle, such that if that middle value is not the target search key, it will check to see if it will continue the search on the lower half of the list or the higher half. The split and search will then continue in the same manner." },
//     { question: "What is a linked list?", answer: "A linked list is a sequence of nodes in which each node is connected to the node following it. This forms a chain-like link of data storage." },
//     { question: "How do you reference all the elements in a one-dimension array?", answer: "To do this, an indexed loop is used, such that the counter runs from 0 to the array size minus one. In this manner, we are able to reference all the elements in sequence by using the loop counter as the array subscript." },
//     { question: "In what areas do data structures applied?", answer: "Data structures is important in almost every aspect where data is involved. In general, algorithms that involve efficient data structure is applied in the following areas: numerical analysis, operating system, A.I., compiler design, database management, graphics, and statistical analysis, to name a few." },
//     { question: "What is LIFO?", answer: "LIFO is short for Last In First Out, and refers to how data is accessed, stored and retrieved. Using this scheme, data that was stored last , should be the one to be extracted first. This also means that in order to gain access to the first data, all the other data that was stored before this first data must first be retrieved and extracted." },
//     { question: "What is a queue?", answer: "A queue is a data structures that can simulates a list or stream of data. In this structure, new elements are inserted at one end and existing elements are removed from the other end." },
//     { question: "What are binary trees?", answer: "A binary tree is one type of data structure that has two nodes, a left node and a right node. In programming, binary trees are actually an extension of the linked list structures." },
//     { question: "Which data structures is applied when dealing with a recursive function?", answer: "Recursion, which is basically a function that calls itself based on a terminating condition, makes use of the stack. Using LIFO, a call to a recursive function saves the return address so that it knows how to return to the calling function after the call terminates." },
//     { question: "What is a stack?", answer: "A stack is a data structure in which only the top element can be accessed. As data is stored in the stack, each data is pushed downward, leaving the most recently added data on top." },
//     { question: "Explain Binary Search Tree", answer: "A binary search tree stores data in such a way that they can be retrieved very efficiently. The left subtree contains nodes whose keys are less than the node's key value, while the right subtree contains nodes whose keys are greater than or equal to the node's key value. Moreover, both subtrees are also binary search trees." },
//     { question: "What are multidimensional arrays?", answer: "Multidimensional arrays make use of multiple indexes to store data. It is useful when storing data that cannot be represented using a single dimensional indexing, such as data representation in a board game, tables with data stored in more than one column." },
//     { question: "Are linked lists considered linear or non-linear data structures?", answer: "It actually depends on where you intend to apply linked lists. If you based it on storage, a linked list is considered non-linear. On the other hand, if you based it on access strategies, then a linked list is considered linear." },
//     { question: "How does dynamic memory allocation help in managing data?", answer: "Aside from being able to store simple structured data types, dynamic memory allocation can combine separately allocated structured blocks to form composite structures that expand and contract as needed." },
//     { question: "What is FIFO?", answer: "FIFO is short for First-in, First-out, and is used to represent how data is accessed in a queue. Data has been inserted into the queue list the longest is the one that is removed first." },
//   ],
//   category3: [
//     { question: "True or False: Using the namespace definition, using namespace std;, allows you to utilize cout and cin in C++.", answer: "True" },
//     { question: "What symbols creates a single line comment and a multi line comment in C++?", answer: "// allows a single line comment and /* text */ allows multi line comments in C++" },
//   ],

// };
module.exports = {
  //get all flashcards
  getFlashcards: async (req, res) => {
    try {
      const flashcards = await FlashCard.find();
      return res.json(flashcards);
    } catch (error) {
      console.log("Error: getFlashcards", error.message);
      return res.status(500).json({ msg: error.message });
    }
  },

  // ## CODE TO INSERT FLASHCARDS INTO DATABASE FOR ONE TIME ##

  // insertFlashcards: async (req, res) => {
  //   const formatFlashcards = (flashcards) => {
  //     return flashcards.map(flashcard => ({
  //       definition: flashcard.question,
  //       answer: flashcard.answer
  //     }));
  //   };

  //   FlashCard.insertMany([
  //     {
  //       category: "Data Structures",
  //       flashcards: formatFlashcards(FlashCardsData.category2),
  //     },
  //     {
  //       category: "Algorithms",
  //       flashcards: formatFlashcards(FlashCardsData.category1),
  //     },
  //     {
  //       category: "C++",
  //       flashcards: formatFlashcards(FlashCardsData.category3),
  //     },
  //   ])
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }
};

