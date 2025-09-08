'use client';

import React, { useMemo } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useRouter, useSearchParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Box, LinearProgress } from '@mui/material';

import { ICharacter } from '@/lib/types';
import { getCharacters } from '@/lib/api';
import CharacterCard from '@/components/CharacterCard';
import FilterBar from '@/components/Filter';
import { useSort } from '@/hooks/useSort';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Loading from '@/app/loading';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [storedValue] = useLocalStorage<ICharacter[]>('favorites', []);

  const sort = searchParams.get('sort') || '';
  const isFavorite = searchParams.get('isFavorite') || '';

  const params = useMemo(() => {
    return {
      name: searchParams.get('name'),
      status: searchParams.get('status'),
    };
  }, [searchParams]);

  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['characters', params],
      queryFn: ({ pageParam = 1, signal }) => getCharacters({ ...params, page: pageParam }, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (!lastPage.info?.next) return undefined;
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get('page'));
      },
    });

  const characters = useSort(sort, data?.pages.flatMap((page) => page.results) ?? []);

  const filteredCharacters = useMemo(() => {
    if (isFavorite) return storedValue;
    return characters;
  }, [isFavorite, storedValue, characters]);

  const goToDetailPage = (id: number) => {
    router.push(`/items/${id}`);
  };

  return (
    <div className="relative">
      <FilterBar />
      {isLoading && <Loading count={8} />}
      {error && <h1 className="text-center text-2xl w-full">No data found :(</h1>}
      {storedValue.length < 1 && isFavorite && (
        <h1 className="text-center text-2xl w-full">No favorite data found :(</h1>
      )}
      {filteredCharacters && (
        <div className="overflow-scroll h-[630px]">
          <VirtuosoGrid
            style={{ height: '80vh' }}
            data={filteredCharacters}
            endReached={() => hasNextPage && fetchNextPage()}
            overscan={200}
            listClassName="grid sm:grid-cols-4 gap-6 p-4"
            itemContent={(_, character) => (
              <CharacterCard
                action={() => goToDetailPage(character.id)}
                key={character.id}
                character={character}
              />
            )}
          />
        </div>
      )}
      {isFetchingNextPage && (
        <Box sx={{ width: '100%', mt: 4 }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </div>
  );
};

export default Page;
