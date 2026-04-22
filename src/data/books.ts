export type Genre = {
  id: string;
  name: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  chapters: number;
  summary: string;
  coverImageUrl?: string;
  genres: Genre[];
};

export const books: Book[] = [
  {
    id: '1',
    title: 'Diário de um Banana',
    author: 'Jeff Kinney',
    publicationYear: 2007,
    chapters: 20,
    summary: 'A história divertida de Greg Heffley, um garoto tentando sobreviver ao ensino fundamental.',
    coverImageUrl: '',
    genres: [
      { id: '1', name: 'Comédia' },
      { id: '2', name: 'Infantojuvenil' }
    ]
  },
  {
    id: '2',
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    publicationYear: 1943,
    chapters: 27,
    summary: 'Um clássico que aborda amizade, amor e o sentido da vida através de uma história poética.',
    coverImageUrl: '',
    genres: [
      { id: '3', name: 'Fábula' },
      { id: '4', name: 'Clássico' }
    ]
  },
  {
    id: '3',
    title: 'O Verão que Mudou Minha Vida',
    author: 'Jenny Han',
    publicationYear: 2009,
    chapters: 30,
    summary: 'Um romance sobre crescimento, amor e as mudanças que um verão pode trazer.',
    coverImageUrl: '',
    genres: [
      { id: '5', name: 'Romance' },
      { id: '6', name: 'Jovem Adulto' }
    ]
  }
];
