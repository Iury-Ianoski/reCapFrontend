import { api } from '@/services/api';
import { CreateReviewDTO, Review } from '@/types/review';

export const getReviews = async (): Promise<Review[]> => {
  try {
    const response = await api.get('/reviews');
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getLatestReviews = async (limit: number): Promise<Review[]> => {
  try {
    const response = await api.get(`/reviews/latest/${limit}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching latest reviews:', error.response?.data);
    throw error;
  }
};

export const getReviewById = async (id: number): Promise<Review> => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching review by ID:', error);
    throw error;
  }
};

export const createReview = async (reviewData: CreateReviewDTO): Promise<Review> => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

export const updateReview = async (id: number, reviewData: Omit<Review, 'id'>): Promise<Review> => {
  try {
    const response = await api.put(`/reviews/${id}`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Error updating review:', error);
    throw error;
  }
}

export const deleteReview = async (id: number): Promise<void> => {
  try {
    await api.delete(`/reviews/${id}`);
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
};