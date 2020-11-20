import React from "react";
import styles from "./Card.module.css";
import State from "../State/State"

const Card = (props) => {

const {name, role} = props.person

// const State = () => {
//   const [count, setCount] = useState(0) 
// }

  return (  
    <article className={styles.article}>
      <div className={styles.title}>
        <h3>Name: {name} </h3>
        <h3>Role: {role} </h3>
      </div>
      <section className={styles.counter}>
        <h3>Counter</h3>
        <State />
      </section>
    </article>
  )
}



export default Card;