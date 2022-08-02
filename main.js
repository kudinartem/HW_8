const books = [
  {
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      path: 'img/don_quixote.jpeg'
  },
  {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
      path: 'img/lord_of_the_rings.jpeg'
  },
  {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      path: 'img/harry_potter.jpeg'
  },
  {
      title: 'Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      path: 'img/alice_adventures_in_wonderland.jpeg'
  },
  {
      title: 'Twenty Thousand Leagues Under the Sea',
      author: 'Jules Verne',
      path: 'img/twenty_thousand_leagues_under_the_sea.jpeg'
  },
  {
      title: 'Moby Dick',
      author: 'Herman Melville',
      path: 'img/moby_dick.jpeg'
  },
  {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      path: 'img/the_picture_of_dorian_gray.jpeg'
  }
]

let table = document.querySelector('.tbody');
valTableName(table, books);
function valTableName(tbody, data) {
  for (const {title, author, path} of data) {
    const tr = tbody.insertRow();
    tr.insertCell().innerHTML = '<img width = "130" src = '+path+'>';
    tr.insertCell().textContent = title;
    tr.insertCell().textContent = author;
  };
};
