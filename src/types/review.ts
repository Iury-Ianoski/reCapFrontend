export type Review = {
  id: number;
  content: string;
  initialChapter: number;
  finalChapter: number;
  spoiler: boolean;
  rating: number;
  book: {
    title: string;
    coverImageUrl: string;
  };
  user: {
    name: string;
  };
};