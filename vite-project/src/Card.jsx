import styles from "./Card.module.css"

function Card(data){
    return (
        <>
        
        <div className={styles.card}>
           
            <img src={data.carddata.flags.png} alt={data.carddata.name}  />
          <h4> {data.carddata.name.common}</h4>
        </div>
        </>
    )
}

export default Card ;