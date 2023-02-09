const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947).author.name;

console.log(authorBornIn1947);


// Retorne o nome do livro com menor número de caracteres (menor nome).

const smallerName = () => {
    let nameBook;
    books.forEach((book) => {
        if(!nameBook || book.name.length < nameBook.length){
            nameBook = book.name;
        }
    });
    return nameBook;
};

console.log(smallerName(books));


//Encontre o primeiro livro cujo nome possua 26 caracteres.

const getNamedBook = () => {
    return books.find((caracter) => caracter.name.length === 26)
};

console.log(getNamedBook(books));



// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = () => {
    return books.every((born) => (
        born.author.birthYear > 1900 && born.birthYear < 2001));
}
  console.log(everyoneWasBornOnSecXX(books));