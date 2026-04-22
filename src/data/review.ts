export type ReviewBook = {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
  chapters: number;
  summary: string;
  coverImageUrl?: string;
  genres: {
    id: number;
    name: string;
  }[];
};

export type Review = {
  id: number;
  content: string;
  initialChapter: number;
  finalChapter?: number;
  spoiler: boolean;
  rating: number;
  book: ReviewBook;
  userId: number;
};

export const reviews: Review[] = [
  {
    id: 1,
    content: 'Os primeiros capítulos são muito engraçados, principalmente as situações na escola. Dá pra entender bem a personalidade do Greg.',
    initialChapter: 1,
    finalChapter: 3,
    spoiler: false,
    rating: 4,
    book: {
      id: 1,
      title: 'Diário de um Banana',
      author: 'Jeff Kinney',
      publicationYear: 2007,
      coverImageUrl: '',
      chapters: 20,
      summary: 'A história divertida de Greg Heffley.',
      genres: [
        { id: 1, name: 'Comédia' }
      ]
    },
    userId: 101
  },
  {
    id: 2,
    content: 'Do capítulo 5 ao 8, a amizade com Rowley fica mais evidente, mas também começam os conflitos. Muito divertido.',
    initialChapter: 5,
    finalChapter: 8,
    spoiler: false,
    rating: 5,
    book: {
      id: 1,
      title: 'Diário de um Banana',
      author: 'Jeff Kinney',
      publicationYear: 2007,
      coverImageUrl: '',
      chapters: 20,
      summary: 'A história divertida de Greg Heffley.',
      genres: [
        { id: 1, name: 'Comédia' }
      ]
    },
    userId: 102
  },
  {
    id: 3,
    content: 'Nos capítulos iniciais, a conversa com o aviador já mostra o tom filosófico da obra. Muito sensível.',
    initialChapter: 1,
    finalChapter: 4,
    spoiler: false,
    rating: 5,
    book: {
      id: 2,
      title: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      publicationYear: 1943,
      coverImageUrl: '',
      chapters: 27,
      summary: 'Um clássico sobre amizade e sentido da vida.',
      genres: [
        { id: 4, name: 'Clássico' }
      ]
    },
    userId: 103
  },
  {
    id: 4,
    content: 'A parte da raposa (capítulos 20 a 21) é simplesmente incrível. A mensagem sobre laços é muito forte.',
    initialChapter: 20,
    finalChapter: 21,
    spoiler: true,
    rating: 5,
    book: {
      id: 2,
      title: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      publicationYear: 1943,
      coverImageUrl: '',
      chapters: 27,
      summary: 'Um clássico sobre amizade e sentido da vida.',
      genres: [
        { id: 4, name: 'Clássico' }
      ]
    },
    userId: 104
  },
  {
    id: 5,
    content: 'Nos primeiros capítulos dá pra sentir bem o clima de verão e as relações familiares. Leitura leve.',
    initialChapter: 1,
    finalChapter: 3,
    spoiler: false,
    rating: 4,
    book: {
      id: 3,
      title: 'O Verão que Mudou Minha Vida',
      author: 'Jenny Han',
      publicationYear: 2009,
      coverImageUrl: '',
      chapters: 30,
      summary: 'Um romance sobre crescimento e mudanças.',
      genres: [
        { id: 5, name: 'Romance' }
      ]
    },
    userId: 105
  },
  {
    id: 6,
    content: 'Entre os capítulos 10 e 15, o desenvolvimento dos sentimentos da Belly fica bem mais intenso.',
    initialChapter: 10,
    finalChapter: 15,
    spoiler: true,
    rating: 4,
    book: {
      id: 3,
      title: 'O Verão que Mudou Minha Vida',
      author: 'Jenny Han',
      publicationYear: 2009,
      coverImageUrl: '',
      chapters: 30,
      summary: 'Um romance sobre crescimento e mudanças.',
      genres: [
        { id: 5, name: 'Romance' }
      ]
    },
    userId: 106
  }
];