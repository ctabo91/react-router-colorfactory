import React from "react";
import { Link } from "react-router-dom";


function ColorsHome({colors}) {
    return (
        <div className="ColorsHome">
            <div>
                <h4>Welcome to the color factory.</h4>
                <h3>
                    <Link to={"/colors/new"}>Add a color</Link>
                </h3>
            </div>
            <div>
                <p>Please select a color.</p>
                {colors.map(color => (
                    <div key={color}>
                        <p>
                            <Link to={`/colors/${color}`}>{color}</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ColorsHome;