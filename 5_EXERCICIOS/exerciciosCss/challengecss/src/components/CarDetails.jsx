import styles from './CarDetails.module.css'

function CarDetails({model, year, color}) {
  return (
    <div>
        <h1 className={styles.car_details_container}>Modelo do carro: {model}</h1>
        <h2>Ano do carro: {year}</h2>
        <h3>Cor do carro: {color}</h3>
    </div>
  )
}

export default CarDetails