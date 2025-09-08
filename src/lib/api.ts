import axios, { AxiosError } from 'axios';
import { CharacterResponse, ICharacter, TApiParams } from '@/lib/types';

const apiRoot = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiRoot.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // console.error('API Error:', error.message);
    return Promise.reject(error);
  },
);

function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || error.response?.statusText || error.message;
    throw new Error(message);
  }
  throw new Error('Unexpected error');
}

export const getCharacters = async (params: TApiParams) => {
  try {
    const response = await apiRoot.get<CharacterResponse>(`/character`, {
      params,
    });
    return response.data.results;
  } catch (error) {
    handleApiError(error);
  }
};

export const getCharacterById = async (id: string) => {
  try {
    const response = await apiRoot.get<ICharacter>(`/character/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
