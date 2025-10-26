let library = {
  name: "City Library",
  books: [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { title: "Atomic Habits", author: "James Clear" }
  ]
};

console.log("Books in the Library:");
for (let book of library.books) {
  console.log(book.title);
}
