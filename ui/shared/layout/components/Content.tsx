import { Box, chakra } from '@chakra-ui/react';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Content = ({ children, className }: Props) => {
  return (
    <Box pt={{ base: 0, lg: 8 }} as="main" className={ className }>
      { children }
    </Box>
  );
};

export default React.memo(chakra(Content));
