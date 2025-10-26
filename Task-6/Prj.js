let library = {
  books: [
    { title: "The Alchemist", author: "Paulo Coelho", isAvailable: true },
    { title: "Harry Potter", author: "J.K. Rowling", isAvailable: true },
    { title: "Atomic Habits", author: "James Clear", isAvailable: false }
  ],

  // List available books
  listAvailableBooks() {
    console.log("Available Books:");
    for (let book of this.books) {
      if (book.isAvailable) {
        console.log(`- ${book.title} by ${book.author}`);
      }
    }
  },

  // Borrow a book (mark unavailable)
  borrowBook(title) {
    for (let book of this.books) {
      if (book.title === title) {
        if (book.isAvailable) {
          book.isAvailable = false;
          console.log(`You have borrowed "${title}".`);
        } else {
          console.log(`Sorry, "${title}" is already borrowed.`);
        }
        return;
      }
    }
    console.log(`Book titled "${title}" not found in the library.`);
  },

  // Return a book (mark available)
  returnBook(title) {
    for (let book of this.books) {
      if (book.title === title) {
        if (!book.isAvailable) {
          book.isAvailable = true;
          console.log(`You have returned "${title}".`);
        } else {
          console.log(`"${title}" was not borrowed.`);
        }
        return;
      }
    }
    console.log(`Book titled "${title}" not found in the library.`);
  }
};

// Example usage:
library.listAvailableBooks();
library.borrowBook("Harry Potter");
library.listAvailableBooks();
library.returnBook("Harry Potter");
library.listAvailableBooks();
