import React, { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const Map: React.FC = () => {
  const [mapsearch, setMapSearh] = useState('');
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

  // const randomUUID = uuidv4();
  // console.log(randomUUID);
  const map = arrayOfObjects.map((f) => {
    // if (f.id?.toString().includes(filsearch) || f.name.includes(filsearch)) {
    if (f.name?.toLowerCase().includes(mapsearch?.toLowerCase())) {
      return f.name;
    }
  });
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMapSearh(event.target.value);
  };
  return (
    <>
      <div className='mb-5 flex items-center justify-center'>
        <div>
          <input
            className='border border-black'
            type='text'
            onChange={onChange}
            value={mapsearch}
          />
          <p className='font-bold'>MAP JAVASCRIPT</p>
          {map.map((f) => (
            <p key={uuidv4()}>{JSON.stringify(f)}</p>
          ))}
        </div>
      </div>
    </>
  );
};
