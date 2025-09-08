'use client';
import { ICharacter } from '@/lib/types';
import { useState } from 'react';
import Image from 'next/image';

export default function CharacterDetail({ character }: { character: ICharacter }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{character.name}</h1>
      <Image
        width={400}
        height={400}
        src={character.image}
        alt={character.name}
        className="rounded"
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <button onClick={() => setFavorite((prev) => !prev)}>{favorite ? '❤️' : '♡'}</button>
    </div>
  );
}
