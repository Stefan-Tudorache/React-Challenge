import React from 'react';
import styles from './CardBack.module.css';

const CardBack = (props) => {

  const {AboutMe, Hobbies} = props.person
    return (  
      <article>
        <div className={styles.title}>
          <h3>About Me</h3>
          <p>{AboutMe}</p>
        </div>
        <section className={styles.counter}>
          <h3>Hobbies</h3>
          <p>{Hobbies}</p>
        </section>
      </article>
    )
  }

export default CardBack;