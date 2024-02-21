import { type ReactElement } from 'react';

export const BallBounce = (): ReactElement => {
  return (
    <>
      <p>
        <a href='#'>
          <span className='highlight' />
        </a>{' '}
      </p>
      <span className='shadow' />
    </>
  );
};
