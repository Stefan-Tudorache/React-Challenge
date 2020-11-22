import React, {useState} from 'react';
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import styles from "./Card.module.scss";

const Card = (props) => {

  const [isFaceDown, setFaceDown] = useState(false);
  const faceDown = isFaceDown ? styles.faceDown : "";

  const {person} = props;
  return (

    <article className={`${styles.card} ${faceDown}`}
    onClick={() => setFaceDown(!isFaceDown)}>
      <div className={styles.front}>
        <CardFront person={person}/>
      </div> 
      <div className={styles.back}>
        <CardBack person={person}/>
      </div> 
    </article>
  )
}

export default Card;