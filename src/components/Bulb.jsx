import React from 'react'


export default function Bulb({ bulb, onClick, isSolution }) {
   let bulbClassName = 'bulb ' + (bulb.value ? 'on' : 'off');
   let innerBulbClassName = 'inner-bulb ' + (bulb.value ? 'on' : 'off');
   let solutionName = (bulb.isBad ? '' : 'no') + 'solution';
   return (
      <>
         <div onClick={() => { onClick(bulb.id) }} className={bulbClassName}>
            <div className={innerBulbClassName}>
               <div style={{ visibility: isSolution ? 'visible' : 'hidden' }} className={solutionName}></div>
            </div>
         </div>
      </>
   )
}