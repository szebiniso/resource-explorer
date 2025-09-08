'use client';
import { ICharacter } from '@/lib/types';
import { getCharacterById } from '@/lib/api';
import CharacterDetail from '@/components/CharacterDetail';
import { useQuery } from '@tanstack/react-query';

interface Props {
  params: { id: string };
}

export default function CharacterDetailPage({ params }: Props) {
  // let character: ICharacter | null = null;
  const { id } = params;

  const { data: character } = useQuery<ICharacter>({
    queryKey: ['characters', id],
    queryFn: () => getCharacterById(id),
  });

  if (!character) {
    return <h1>Not found</h1>;
  }

  return <CharacterDetail character={character} />;
}
