export type CardBookProps = {
    id: number;
    title: string;
    author: string;
    coverImageUrl: string;
    genres: { id: number; name: string }[];
};