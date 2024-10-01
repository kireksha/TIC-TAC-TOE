import styles from './FieldsLayout.module.css'
import Field from '../field/Field'
import { store } from '../../store'

const FieldsLayout = ({ storeState }) => {
    return (
        <div className={styles.FieldsLayout}>
            {storeState.fields.map((field, index) => {
                return <Field index={index} key={index} field={field} storeState={storeState} />
            })}
        </div>
    )
}

export default FieldsLayout
