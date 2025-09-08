import { ICharacter } from '@/lib/types';
import { getCharacterById } from '@/lib/api';
import CharacterDetail from '@/components/CharacterDetail';

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

  return <CharacterDetail character={character} />;
}
