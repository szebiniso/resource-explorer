'use client';
import { ICharacter } from '@/lib/types';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useFavorites } from '@/hooks/useFavorites';

export default function CharacterDetail({ character }: { character: ICharacter }) {
  const { isFavorite, toggleFavorite } = useFavorites(character);

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex-shrink-0">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="rounded-xl object-cover shadow-md"
          priority
        />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {character.name}
        </h1>

        <div className="flex gap-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Status:</span> {character.status}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Species:</span> {character.species}
          </p>
        </div>

        <IconButton onClick={toggleFavorite} color="error" size="large" className="mt-2">
          {isFavorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
        </IconButton>
      </div>
    </div>
  );
}
