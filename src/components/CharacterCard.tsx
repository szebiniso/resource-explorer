import { ICharacter } from '@/lib/types';
import Image from 'next/image';

interface Props {
  character: ICharacter;
}

export default function CharacterCard({ character }: Props) {
  const statusColor = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Image
        src={character.image}
        alt={character.name}
        width={400}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{character.name}</h3>
          <span
            className={`inline-block w-3 h-3 rounded-full ${statusColor[character.status]}`}
            title={character.status}
          ></span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {character.species} {character.type ? `- ${character.type}` : ''}
        </p>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
          Last location: {character.location.name}
        </p>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
          Origin: {character.origin.name}
        </p>
      </div>
    </div>
  );
}
