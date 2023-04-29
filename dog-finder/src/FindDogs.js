import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FindDog({dogs}) {
    const { name } = useParams();
    console.log(name);

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }
  
  return null;
}

export default FindDog;