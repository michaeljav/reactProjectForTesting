import React, { useState } from 'react';

interface ListItem {
  id: number;
  text: string;
  nestedItems?: ListItem[];
}

interface ListProps {
  items: ListItem[];
}

const NestedList: React.FC<ListProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const handleToggleNested = (itemId: number) => {
    if (visibleItems.includes(itemId)) {
      setVisibleItems(visibleItems.filter((id) => id !== itemId));
    } else {
      setVisibleItems([...visibleItems, itemId]);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleToggleNested(item.id)}>
          {item.text}
          {visibleItems.includes(item.id) && (
            <ul>
              {item.nestedItems &&
                item.nestedItems.map((nestedItem) => (
                  <li key={nestedItem.id}>{nestedItem.text}</li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export const NestedListApp: React.FC = () => {
  const items: ListItem[] = [
    {
      id: 1,
      text: 'Item 1',
      nestedItems: [
        { id: 2, text: 'Nested Item 1' },
        { id: 3, text: 'Nested Item 2' },
      ],
    },
    {
      id: 4,
      text: 'Item 2',
      nestedItems: [
        { id: 5, text: 'Nested Item 3' },
        { id: 6, text: 'Nested Item 4' },
      ],
    },
    {
      id: 7,
      text: 'Item 3',
      nestedItems: [
        { id: 8, text: 'Nested Item 5' },
        { id: 9, text: 'Nested Item 6' },
      ],
    },
    {
      id: 10,
      text: 'Item 4',
      nestedItems: [
        { id: 11, text: 'Nested Item 7' },
        { id: 12, text: 'Nested Item 8' },
      ],
    },
    {
      id: 13,
      text: 'Item 5',
      nestedItems: [
        { id: 14, text: 'Nested Item 9' },
        { id: 15, text: 'Nested Item 10' },
      ],
    },
  ];

  return (
    <div>
      <h1>Nested List Example</h1>
      <NestedList items={items} />
    </div>
  );
};


