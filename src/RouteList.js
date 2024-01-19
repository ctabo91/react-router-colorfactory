import React, {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import ColorsHome from "./ColorsHome";
import NewColorForm from "./NewColorForm";
import ColorFilter from "./ColorFilter";


function RouteList() {
    const [colors, setColors] = useState(["red", "green", "blue"]);

    const addColor = color => {
        setColors(colors => [...colors, color]);
    };

    return (
        <Routes>
            <Route path="/colors" element={<ColorsHome colors={colors} />} />

            <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />

            <Route path="/colors/:color" element={<ColorFilter colors={colors} />} />

            <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
    );
}


export default RouteList;