import displayBooks from './modules/displayBooks.js';
import Books from './modules/books.js';
import navigation from './modules/navigation.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const booksList = new Books();
displayBooks(booksList);

const form = document.querySelector('.add-books');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 100000) + 1;
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id, author, title };
  if (title && author) {
    booksList.addBook(newBook);
    displayBooks(booksList);
    document.querySelector('.input-title').value = '';
    document.querySelector('.input-author').value = '';
  } else {
    alert('Please enetr title and author');
  }
});

// navigation SPA
navigation();

// Add time
const setTime = () => {
  const dt = DateTime.now();
  const time = dt.toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.time').textContent = time;
};

setTime();

setInterval(() => { setTime(); }, 1000);