import styles from './GridItem.module.css'
import DownImage from '../../assets/down.png'
import UpImage from '../../assets/up.png'
export const GridItem = (props) => {
    

    const {item,key} = props

    return (
        <div className={styles.main} style={{backgroundColor:item.color}} key={key}>
       
        <div className={styles.gridIcon}>
            {item.icon == 'up' && <img src={UpImage} alt="up" width="30" />}
            {item.icon == 'down' && <img src={DownImage} alt="down" width="30" />}
        </div>
        <div className={styles.gridTitle}>
            {item.title}
        </div>
        {
            item.yourImc &&
            <div className={styles.result_imc}>

                O seu IMC é <strong>{item.yourImc}</strong> 

            </div>
        }
        <div className={styles.gridInfo}>
            IMC está entre <strong>{item.imc[0]} </strong> e <strong>{item.imc[1]} </strong>
        </div>
      </div>
    )
}
