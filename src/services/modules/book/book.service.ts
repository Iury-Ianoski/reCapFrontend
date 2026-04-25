import { api } from '@/services/api';
import { Book } from '@/types/book';

export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBookById = async (id: number): Promise<Book> => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw error; 
  }
};

export const createBook = async (bookData: Omit<Book, 'id'>): Promise<Book> => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (id: number, bookData: Omit<Book, 'id'>): Promise<Book> => {
  try {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBook = async (id: number): Promise<void> => {
  try {
    await api.delete(`/books/${id}`);
  } catch (error) {
    throw error;
  }
};
