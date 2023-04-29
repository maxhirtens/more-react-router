import React from 'react';
import { useParams, Link } from 'react-router-dom';
import App from './App';

const DogDetails = () => {
    const { name } = useParams();

    const dogs = App.defaultProps.dogs;

    const thisDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())

    console.log(thisDog);

    return (
        <div key={thisDog.name}>
            <img alt={thisDog.name} src={thisDog.src}></img>
            <h4>{thisDog.name.toUpperCase()}</h4>
            <div>Age: {thisDog.age}</div>
            <div>Facts: <ul>{thisDog.facts.map(f => (<li>{f}</li>))}</ul></div>
            <Link to="/dogs">Back Home</Link>
        </div>
    )
}

export default DogDetails;

