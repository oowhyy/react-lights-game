import React from 'react'
export default function Bulb({ bulb, onClick }) {
    let bulbClassName = 'bulb ' + (bulb.value ? 'on' : 'off');
    let innerBulbClassName = 'inner-bulb ' + (bulb.value ? 'on' : 'off');
    return (
        <>
            <div onClick={() => { onClick(bulb.id) }} className={bulbClassName}>
                <div className={innerBulbClassName}>
                </div>
            </div>
        </>
    )
}