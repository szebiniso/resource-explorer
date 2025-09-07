import { ICharacter } from '@/lib/types';
import { getCharacterById } from '@/lib/api';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

export default async function CharacterDetailPage({ params }: Props) {
  let character: ICharacter | null = null;

  try {
    character = await getCharacterById(params.id);
  } catch (err) {
    return <p className="text-red-600">Failed to load character</p>;
  }

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
    </div>
  );
}
