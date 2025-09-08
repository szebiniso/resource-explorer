'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get('name') || '';
  const initialFilter = searchParams.get('status') || '';
  const initialSort = searchParams.get('sort') || '';

  const [search, setSearch] = useState(initialSearch);
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);

  const updateUrl = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  };

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    updateUrl({ name: debouncedSearch });
  }, [debouncedSearch]);

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    updateUrl({ status: event.target.value });
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    updateUrl({ sort: event.target.value });
  };

  return (
    <Box display="flex" className="flex" gap={2} flexWrap="wrap" mb={3}>
      {/* Search */}
      <TextField
        className="w-fit flex-3"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 200 }}
      />

      {/* Filter */}
      <FormControl className="flex-1" sx={{ minWidth: 180 }}>
        <InputLabel>Status</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Status">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

      {/* Sort */}
      <FormControl className="flex-1" sx={{ minWidth: 180 }}>
        <InputLabel>Sort</InputLabel>
        <Select value={sort} onChange={handleSortChange} label="Sort">
          <MenuItem value="name-asc">Name (A → Z)</MenuItem>
          <MenuItem value="name-desc">Name (Z → A)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
