import React from 'react';
import { Link } from "react-router-dom";

const ListColors = (colors) => {
    return (
        <div>
            <h1>Here are the colors!</h1>
            <div>{colors.colors.map(c => (
                <div className="ColorList-entry" key={c}>
                    <h4>
                        <Link to={`/colors/${c.toLowerCase()}`}>{c}</Link>
                    </h4>
                </div>
            ))}</div>
            <h5>
                <Link to={`/colors/new`}>Add a color</Link>
            </h5>
        </div>
    )
}

export default ListColors;