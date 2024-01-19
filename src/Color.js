import React from "react";
import { Link, Navigate } from "react-router-dom";


function Color({color}) {
    if (!color) return <Navigate to="/colors" />

    return (
        <main 
            className="Color"
            style={{backgroundColor: color}}
        >
            <h2>This is</h2>
            <h1>{color}</h1>
            <h3>Isn't it lovely?</h3>
            <div>
                <h3>
                    <Link to="/colors">Go Back Home</Link>
                </h3>
            </div>
        </main>
    );
}


export default Color;