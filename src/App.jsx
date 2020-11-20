import  styles from "./App.module.css";
import Card from "./components/Card"
import team from "./data/team";


const App = () => {

  const getPeople = team.map((person) => {
    return <Card person={person} key={person.id}/>
  })
  

  return (
    <div className={styles.main}> 
    <div className={styles.navBar}>
      <div><a href="#">Link</a></div>
      <h1>Ticket Tracker</h1> 
      <div><a href="#">Link</a></div>     
    </div>      
      <section className={styles.main_container}>
          {getPeople}
      </section>      
    </div>
  );
}

export default App;
