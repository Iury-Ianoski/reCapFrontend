import { Genre } from './genre';

export type Book = {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
  chapters: number;
  summary: string;
  coverImageUrl?: string;
  genres: Genre[];
};