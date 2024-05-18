import styles from "./Home.module.css" ;


import Card from "./Card";

function Home(data) {


  return (
    <>

<div className={styles.container}>
 {data.data.map((ele,key)=>(
<div className={styles.seconddiv} key={key}>{<Card carddata={ele}/>}</div>
 ))}
 </div>
    </>
  )
}

export default Home