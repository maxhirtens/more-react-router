import React from 'react';
import { Link } from "react-router-dom";
import App from "./App"

const ColorForm = () => {
    const colors = App.defaultProps.colors;       
   
    function handleSubmit(e) {
        e.preventDefault();
        let newColor = e.target[0].value;
        colors.push(newColor);
        console.log(colors)
    }

    return (
        <div>
            <h1>Add a new color!</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="color">Pick a Color:  </label>
                    <input name="color" type="color" />
                    <div>
                        <button>Add to Colors</button>
                    </div>
                </form>
            </div>
            <Link to="/colors">Back Home</Link>
        </div>
    )
}

export default ColorForm;