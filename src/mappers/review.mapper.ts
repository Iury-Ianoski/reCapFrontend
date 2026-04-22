import { Review } from '@/types/review';

export const mapReviewToCard = (review: Review) => ({
  id: review.id,
  title: review.book.title,
  chapter: `Cap: ${review.initialChapter}-${review.finalChapter}`,
  content: review.content,
  spoiler: review.spoiler,
  userName: review.user.name,
  image: review.book.coverImageUrl,
  rating: review.rating,
});