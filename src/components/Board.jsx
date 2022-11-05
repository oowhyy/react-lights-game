import React, { useEffect } from 'react';
import Bulb from './Bulb';
import { useState, useMemo } from 'react';
function coinflip() {
    return Math.random() < 0.5;
}
const [rows, cols] = [5, 5];
const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridGap: "5px"
};



export default function Board({ isSolution, pseudoSeed }) {
    const [bulbs, setBulbs] = useState(initBulbs(rows, cols));
    const neighbours = useMemo(() => initNeighbours(rows, cols), [])

    useEffect(() => {

        let active = true;
        if (active) {
            shuffle(rows * cols)
        }
        return () => { active = false }
    }, [pseudoSeed]) // eslint-disable-line react-hooks/exhaustive-deps
    function shuffle(total) {
        // console.log('shuffled')
        for (let i = 0; i < total; i++) {
            if (coinflip()) {
                flip(i);
            }
        }
    }
    function initBulbs(m, n) {
        let arr = []
        for (let i = 0; i < m * n; i++) {
            arr.push({ id: i, value: 1, isBad: 0 })
        }
        return arr;
    }
    function initNeighbours(m, n) {
        let arr = []
        for (let i = 0; i < m * n; i++) {
            let el = [];
            if (i >= n) {
                el.push(i - n)
            }
            if (i % n !== 0) {
                el.push(i - 1)
            }
            if ((i + 1) % n !== 0) {
                el.push(i + 1)
            }
            if (i + n < m * n) {
                el.push(i + n)
            }
            arr.push(el);
        }
        return arr;
    }

    function flip(ind) {
        const newBulbs = [...bulbs]
        for (let b of neighbours[ind]) {
            newBulbs[b].value ^= 1;
        }
        newBulbs[ind].value ^= 1;
        newBulbs[ind].isBad ^= 1;
        setBulbs(newBulbs);
    }

    return (
        <div className='board' style={gridStyle}>
            {/* <div>{pseudoSeed}</div> */}
            {bulbs.map((bulb) => <Bulb isSolution={isSolution} key={bulb.id} bulb={bulb} onClick={flip}></Bulb>)}
        </div>
    )
}