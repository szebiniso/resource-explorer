import React from 'react';
import { Box } from '@mui/material';
import LoadingBlock from '@/components/LoadingBlock';

type TProps = {
  count?: number;
};

const Loading = ({ count }: TProps) => {
  if (count) {
    return (
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={3}
        sx={{ width: '100%' }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <LoadingBlock key={index} />
        ))}
      </Box>
    );
  }

  return <LoadingBlock />;
};

export default Loading;
