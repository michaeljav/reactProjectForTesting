import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Filter: React.FC = () => {
  const [filsearch, setFilSearh] = useState('');
  const arrayOfObjects = [
    { id: 1, name: 'John', age: 30, city: 'New York', country: 'USA' },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      city: 'London',
      country: 'UK',
      occupation: 'Engineer',
    },
    {
      id: 3,
      name: 'Doe',
      age: 35,
      city: 'Paris',
      country: 'France',
      hobby: 'Reading',
    },
    {
      id: 4,
      name: 'Alice',
      age: 28,
      city: 'Berlin',
      country: 'Germany',
      profession: 'Teacher',
    },
    {
      id: 5,
      name: 'Bob',
      age: 32,
      city: 'Tokyo',
      country: 'Japan',
      language: 'Japanese',
    },
    {
      id: 6,
      name: 'Eve',
      age: 40,
      city: 'Sydney',
      country: 'Australia',
      interest: 'Traveling',
    },
    {
      id: 7,
      name: 'Mike',
      age: 45,
      city: 'Toronto',
      country: 'Canada',
      skill: 'Programming',
    },
    {
      id: 8,
      name: 'Sara',
      age: 29,
      city: 'Madrid',
      country: 'Spain',
      passion: 'Music',
    },
    {
      id: 9,
      name: 'Chris',
      age: 33,
      city: 'Rome',
      country: 'Italy',
      sport: 'Football',
    },
    {
      id: 10,
      name: 'Alex',
      age: 36,
      city: 'Moscow',
      country: 'Russia',
      expertise: 'Marketing',
    },
  ];

  const filter = arrayOfObjects.filter(
    (f) =>
      f.id?.toString().includes(filsearch) ||
      f.name?.toLowerCase().includes(filsearch?.toLowerCase())
  );
  const onChange = (event) => {
    setFilSearh(event.target.value);
  };
  return (
    <>
      <div className='flex items-center justify-center'>
        <div>
          <input
            className='border border-black'
            type='text'
            onChange={onChange}
            value={filsearch}
          />
          <p className='font-bold'>FILTER JAVASCRIPT</p>
          {filter.map((f) => (
            <p key={uuidv4()}>{JSON.stringify(f)}</p>
          ))}
        </div>
      </div>
    </>
  );
};
