import * as React from 'react';

export default function ItemsLeft({
  itemsLeft,
}: {
  itemsLeft: number;
}): React.JSX.Element {
  return (
    <div className="relative flex-1 text-left" data-testid="items-left">
      {itemsLeft === 1 ? '1 item left' : `${itemsLeft} items left`}
    </div>
  );
}
