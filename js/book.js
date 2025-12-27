let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
  const bookName = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;

  if (bookName === "" || author === "") {
    alert("Please fill all fields");
    return;
  }

  books.push({ bookName, author });
  localStorage.setItem("books", JSON.stringify(books));

  document.getElementById("bookName").value = "";
  document.getElementById("author").value = "";

  displayBooks();
}

function displayBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach((book, index) => {
    list.innerHTML += `
      <li>
        ${book.bookName} - ${book.author}
        <button onclick="deleteBook(${index})">Delete</button>
      </li>
    `;
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}

displayBooks();
