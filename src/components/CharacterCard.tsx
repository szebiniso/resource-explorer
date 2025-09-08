'use client';

import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, MouseEvent } from 'react';
import { ICharacter } from '@/lib/types';

type TProps = {
  character: ICharacter;
  action: () => void;
};

export default function CharacterCard({ character, action }: TProps) {
  const [favorite, setFavorite] = useState(false);

  const onToggleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    setFavorite((prev) => !prev);
  };

  return (
    <Card onClick={action} className="max-w-[300px] cursor-pointer">
      <CardMedia component="img" height="200" image={character.image} alt={character.name} />
      <CardContent className="flex justify-between items-center">
        <Typography variant="h6">{character.name}</Typography>
        <IconButton onClick={onToggleFavorite} color="error" size="large" className="mt-2">
          {favorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="medium" />}
        </IconButton>
      </CardContent>
    </Card>
  );
}
