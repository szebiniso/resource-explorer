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
  IconButton,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import { useAppParams } from '@/hooks/useAppParams';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FilterBar = () => {
  const { updateUrl } = useAppParams();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get('name') || '';
  const initialFilter = searchParams.get('status') || '';
  const initialSort = searchParams.get('sort') || '';
  const isFavorite = !!searchParams.get('isFavorite');

  const [search, setSearch] = useState(initialSearch);
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    updateUrl({ name: debouncedSearch });
  }, [debouncedSearch, updateUrl]);

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
      <TextField
        className="w-fit flex-3"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 200 }}
      />
      <FormControl className="flex-1" sx={{ minWidth: 180 }}>
        <InputLabel>Status</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Status" variant="outlined">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="flex-1" sx={{ minWidth: 180 }}>
        <InputLabel>Sort</InputLabel>
        <Select value={sort} onChange={handleSortChange} label="Sort" variant="outlined">
          <MenuItem value="name-asc">Name (A → Z)</MenuItem>
          <MenuItem value="name-desc">Name (Z → A)</MenuItem>
        </Select>
      </FormControl>
      <IconButton onClick={() => updateUrl({ isFavorite: isFavorite ? '' : 'true' })} color="error">
        {isFavorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
      </IconButton>
    </Box>
  );
};

export default FilterBar;
