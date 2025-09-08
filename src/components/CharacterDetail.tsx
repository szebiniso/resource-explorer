'use client';
import { ICharacter } from '@/lib/types';
import { useState } from 'react';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

export default function CharacterDetail({ character }: { character: ICharacter }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-8">
      {/* Character Image */}
      <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex-shrink-0">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="rounded-xl object-cover shadow-md"
          priority
        />
      </div>

      {/* Character Info */}
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

        {/* Favorite Button */}
        <IconButton
          onClick={() => setFavorite((prev) => !prev)}
          color="error"
          size="large"
          className="mt-2"
        >
          {favorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
        </IconButton>
      </div>
    </div>
  );
}
