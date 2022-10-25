import React from 'react'
export default function Bulb({ isOn, onClick }) {
    let bulbClassName = 'bulb ' + (isOn ? 'on' : 'off');
    let innerBulbClassName = 'inner-bulb ' + (isOn ? 'on' : 'off');
    return (
        <>
            <div onClick={onClick} className={bulbClassName}>
                <div className={innerBulbClassName}>
                </div>
            </div>
        </>
    )
}