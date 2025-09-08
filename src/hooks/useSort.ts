import { useMemo } from 'react';
import { ICharacter } from '@/lib/types';

export const useSort = (sort: string, data?: ICharacter[]) => {
  return useMemo(() => {
    if (!data) return [];
    const sorted = [...data];
    if (sort === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  }, [data, sort]);
};
