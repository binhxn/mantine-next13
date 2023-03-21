'use client';

import { createStyles, Text, Title, Button } from '@mantine/core';
import { useState } from 'react';

// Use createStyles for static extraction / className approach
// A solution would be to expose the createStyles function for client-apps to use
const useStyles = createStyles((theme, props) => ({
  root: {
    position: 'relative',
  },
  input: {
    height: 'auto',
    paddingTop: 18,
  },
  label: {
    position: 'absolute',
    pointerEvents: 'none',
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  dynamicText: {
    // @ts-ignore
    color: props?.textColor === 'red' ? 'red' : 'blue',
  },
}));

export function Test() {
  const [textColor, setTextColor] = useState('red');
  // You can add these classes as classNames to any Mantine input, it will work the same
  // @ts-ignore
  const { classes } = useStyles({ textColor });

  const handleButtonClick = () => {
    setTextColor(textColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title>This is a NextJS header</Title>
      <Text className={classes.dynamicText}>Dynamic text color: {textColor}</Text>
      <Button onClick={handleButtonClick}>Change text color</Button>
    </div>
  );
}
