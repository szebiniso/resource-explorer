import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ICharacter } from '@/lib/types';

export function useFavorites(character: ICharacter) {
  const [favorites, setFavorites] = useLocalStorage<ICharacter[]>('favorites', []);

  const isFavorite = useMemo(() => {
    return favorites.some((fav) => fav.id === character.id);
  }, [favorites, character.id]);

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  }, [favorites, setFavorites, isFavorite]);

  return { favorites, isFavorite, toggleFavorite };
}
