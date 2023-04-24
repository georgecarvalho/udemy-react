import styles from './CarDetails.module.css'

const CarDetails = ({brand, color, km}) => {
  return (
    <div>
        <ul className={styles.lista_carros}>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>Quilometragem: {km}</li>
        </ul>
    </div>
  )
}

export default CarDetails