import * as React from 'react';

export interface IAppProps {
}

export default function NavBar (props: IAppProps) {
  return (
    <div>
      <nav className='bg-light'>
            <h1 className='p-3 px-5'>Weather App</h1>
      </nav>
    </div>
  );
}
