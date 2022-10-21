import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
import Poster from '../Components/Poster.jsx';

export default function Home(props) {
  const {loaded, movies} = props;
  
  return (
    <>
      <Header />
      <div className='w-full'>
        <Poster loaded={loaded} movies={movies}/>
      </div>
    </>
  );
}


  