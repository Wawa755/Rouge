import React from 'react';
import '../../../sass/styles.scss';
import '../../../sass/component/_button.scss';
import { Button } from '@mantine/core';

function Demo() {
    return (
      <Button classNames={{ root: 'button-test' }} variant="filled">
        Button
      </Button>
    );
  }

export default Demo;