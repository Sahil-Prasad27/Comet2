import React from 'react';
import Body from './components/Body';
import Headers from './components/Headers';

const App = () => {
  return (
    <div className='bg-black bg-cover w-[100%]'>
      <Headers />
      <Body />
    </div>
  );
}

export default App;
