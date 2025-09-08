'use client';

import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ICharacter } from '@/lib/types';
import { useFavorites } from '@/hooks/useFavorites';

type TProps = {
  character: ICharacter;
  action: () => void;
};

export default function CharacterCard({ character, action }: TProps) {
  const { isFavorite, toggleFavorite } = useFavorites(character);

  return (
    <Card onClick={action} className="max-w-[300px] cursor-pointer">
      <CardMedia component="img" height="200" image={character.image} alt={character.name} />
      <CardContent className="flex justify-between items-center">
        <Typography variant="h6">{character.name}</Typography>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          color="error"
          size="large"
          className="mt-2"
        >
          {isFavorite ? (
            <FavoriteIcon fontSize="medium" />
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
}
