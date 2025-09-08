'use client';

import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, MouseEvent } from 'react';
import { ICharacter } from '@/lib/types';

type TProps = {
  character: ICharacter;
};

export default function CharacterCard({ character }: TProps) {
  const [favorite, setFavorite] = useState(false);

  const onToggleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    setFavorite((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="200" image={character.image} alt={character.name} />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <IconButton onClick={onToggleFavorite} color="primary">
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
}
