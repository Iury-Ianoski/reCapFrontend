export type CardProps = {
  modo: 'timeline' | 'progress';
  spoiler: boolean;
  title: string;
  chapter: string;
  content: string;
  userName: string;
  image: string;
  rating?: number;
};