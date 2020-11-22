import React, {useState} from 'react';
import styles from '../CardFront/CardFront.module.css'

const State = () => {
  const [count, setCount] = useState(0) 

  return (
   <div>
     <p>{count}</p>
     <div className={styles.buttons}>
        <button onClick={(event) => {event.stopPropagation(); setCount((count-1))}}>-</button>
        <button onClick={(event) => {event.stopPropagation(); setCount((count+1))}}>+</button>
     </div>
   </div>
  )
}

export default State;