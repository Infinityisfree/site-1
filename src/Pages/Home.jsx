import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
import Poster from '../Components/Poster.jsx';

export default function Home(props) {
  const {loaded, movies} = props;
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setIndex(Math.floor(Math.random() * 19))
  },[])

  return (
    <>
      <Header />
      <div className='w-full'>
        <Poster loaded={loaded} movies={movies} index={index}/>
      </div>
    </>
  );
}


  