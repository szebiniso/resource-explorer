'use client';

import React, { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ICharacter } from '@/lib/types';
import { getCharacters } from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import CharacterCard from '@/components/CharacterCard';
import FilterBar from '@/components/Filter';
import { useSort } from '@/hooks/useSort';
import Loading from '@/app/loading';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sort = searchParams.get('sort') || '';
  const isFavorite = searchParams.get('isFavorite') || '';
  const [favorites] = useLocalStorage<ICharacter[]>('favorites', []);

  const params = useMemo(() => {
    return {
      name: searchParams.get('name'),
      status: searchParams.get('status'),
    };
  }, [searchParams]);

  const { data, error, isLoading } = useQuery<ICharacter[]>({
    queryKey: ['characters', params],
    queryFn: () => getCharacters(params),
  });

  const characters = useSort(sort, data);

  const goToDetailPage = (id: number) => {
    router.push(`/items/${id}`);
  };

  const filteredCharacters = useMemo(() => {
    if (isFavorite) {
      return favorites;
    }
    return characters;
  }, [isFavorite, favorites, sort, data]);

  return (
    <div>
      <FilterBar />
      {error && <h1 className="text-center text-2xl w-full">No data found :(</h1>}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-scroll h-[600px]">
          <div className="grid sm:grid-cols-4 gap-6">
            {filteredCharacters.map((item) => (
              <CharacterCard
                action={() => goToDetailPage(item.id)}
                key={item.id}
                character={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
