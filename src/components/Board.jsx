import React from 'react';
import Bulb from './Bulb';
import { useState } from 'react';
function getRandom() {
    return Math.random() < 0.5;
}

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: "5px"
};

const [n, m] = [3, 3];
const initialBulbs = (function () {
    let arr = []
    for (let i = 0; i < m * n; i++) {
        arr.push({ id: i, value: getRandom() })
    }
    return arr;
})();

const neighbours = (function () {

})();
export default function Board({ }) {
    const [bulbs, setBulbs] = useState(initialBulbs);
    const [test, setTest] = useState(0)
    console.log("board rerender")
    function flip(ind) {
        const newBulbs = [...bulbs]
        newBulbs[ind].value ^= 1;
        setBulbs(newBulbs);
    }

    return (
        <div style={gridStyle}>
            {bulbs.map((bulb) => <Bulb key={bulb.id} bulb={bulb} onClick={flip}></Bulb>)}
        </div>
    )
}