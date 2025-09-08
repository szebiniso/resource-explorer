'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ICharacter } from '@/lib/types';
import { getCharacters } from '@/lib/api';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import CharacterCard from '@/components/CharacterCard';
import FilterBar from '@/components/Filter';
import { useSort } from '@/hooks/useSort';

const Page = () => {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') || '';
  useParams();

  const params = useMemo(() => {
    return {
      name: searchParams.get('name'),
      status: searchParams.get('status'),
    };
  }, [searchParams]);

  const { data } = useQuery<ICharacter[]>({
    queryKey: ['characters', params],
    queryFn: () => getCharacters(params),
  });

  const characters = useSort(sort, data);

  const router = useRouter();

  const goToDetailPage = (id: number) => {
    router.push(`/items/${id}`);
  };

  return (
    <div>
      <FilterBar />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 auto-rows-fr">
        {characters &&
          characters.map((item) => (
            <CharacterCard action={() => goToDetailPage(item.id)} key={item.id} character={item} />
          ))}
      </div>
    </div>
  );
};

export default Page;
