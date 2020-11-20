import React, {useState} from 'react';
import styles from '../Card/Card.module.css'

const State = () => {
  const [count, setCount] = useState(0) 

  return (
   <div>
     <p>{count}</p>
     <div className={styles.buttons}>
        <button onClick={() => setCount((count - 1))}>-</button>
        <button onClick={() => setCount((count + 1))}>+</button>
     </div>
   </div>
  )
}


export default State;