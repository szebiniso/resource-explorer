import axios from 'axios';
import { CharacterResponse, ICharacter, TApiParams } from '@/lib/types';

const apiRoot = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCharacters = async (params: TApiParams) => {
  const response = await apiRoot.get<CharacterResponse>(`/character`, { params });
  return response.data.results;
};

export const getCharacterById = async (id: string) => {
  const response = await apiRoot.get<ICharacter>(`/character/${id}/`);
  return response.data;
};
