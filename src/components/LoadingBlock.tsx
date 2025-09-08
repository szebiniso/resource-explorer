import React from 'react';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';

const LoadingBlock = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Typography variant="h6">
          <Skeleton width="80%" />
        </Typography>
        <Typography variant="body2">
          <Skeleton width="60%" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoadingBlock;
