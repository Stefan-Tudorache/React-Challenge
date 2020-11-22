import React, {useState} from "react";
import styles from "./CardFront.module.css";
import State from "../State/State";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "../../data/fa-library"




const CardFront  = (props) => {

const {name, role} = props.person


const [isFull, setFull] = useState(false);
const heartIcon = isFull ? ["fas", "heart"] : ["far", "heart"];

const handleClick = (e) => {
  e.stopPropagation();
  setFull(!isFull)
}


  return (  
    <article>
      <div className={styles.title}>
        <h3>Name: {name} </h3> 
        <div className={styles.rating}>
          <p>Rate</p>  
          <span onClick={handleClick}>
            <FontAwesomeIcon icon={heartIcon} />
            <FontAwesomeIcon icon={heartIcon} />
            <FontAwesomeIcon icon={heartIcon} />        
          </span> 
          <p>Job ?</p>      
        </div>
        <h3>Role: {role} </h3>
      </div>
      <section className={styles.counter}>
        <h3>Counter</h3>
        <State />
      </section>
    </article>
  )
}



export default CardFront;