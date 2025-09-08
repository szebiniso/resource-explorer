'use client';
import { ICharacter } from '@/lib/types';
import { getCharacterById } from '@/lib/api';
import CharacterDetail from '@/components/CharacterDetail';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/app/loading';

interface Props {
  params: { id: string };
}

export default function CharacterDetailPage({ params }: Props) {
  const { id } = params;

  const {
    data: character,
    error,
    isLoading,
  } = useQuery<ICharacter>({
    queryKey: ['characters', id],
    queryFn: () => getCharacterById(id),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  if (!character) {
    return <h1>Not found</h1>;
  }

  return <CharacterDetail character={character} />;
}
