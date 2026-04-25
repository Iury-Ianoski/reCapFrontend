import { Book } from "@/types/book";
import { CardBookProps } from "@/components/Card_Book/types";

export function mapBookToCard(book: Book): CardBookProps {
  return {
    id: book.id,
    title: book.title,
    author: book.author,
    coverImageUrl: book.coverImageUrl || '',
    genres: book.genres.map(genre => ({
      id: genre.id,
      name: genre.name
    }))
  };
}

