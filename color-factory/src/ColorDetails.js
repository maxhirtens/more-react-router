import React from 'react';
import { useParams, Link } from 'react-router-dom';
import App from './App';

const ColorDetails = () => {
    const { name } = useParams();

    const colors = App.defaultProps.colors;

    const thisColor = colors.find(color => color.toLowerCase() === name.toLowerCase())

    console.log(thisColor);

    return (
        <div key={thisColor} style={{backgroundColor: thisColor}}>
            <h4>You like {thisColor.toUpperCase()}?</h4>
            <Link to="/colors">Back Home</Link>
        </div>
    )
}

export default ColorDetails;

