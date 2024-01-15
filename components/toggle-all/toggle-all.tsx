'use client';

import * as React from 'react';
import { toggleAll } from '@/components/toggle-all/actions';
import Button from './button';

export default function ToggleAll({
  allDone,
}: {
  allDone: boolean;
}): React.JSX.Element {
  return (
    <Button
      aria-label="toggle all"
      onClick={() => {
        toggleAll(!allDone).catch(() => {
          //
        });
      }}
      type="button"
    >
      ➔
    </Button>
  );
}
