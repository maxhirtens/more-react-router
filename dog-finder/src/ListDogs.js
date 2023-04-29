import React from 'react';
import { Link } from "react-router-dom";

const ListDogs = (dogs) => {
    return (
        <div>
            <h1>Here are the dogs!</h1>
            <div>{dogs.dogs.map(d => (
                <div className="DogList-entry" key={d.name}>
                    <img alt={d.name} src={d.src}></img>
                    <h4>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h4>
                </div>
            ))}</div>
        </div>
    )
}

export default ListDogs;