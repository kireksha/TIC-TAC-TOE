import styles from './FieldsLayout.module.css'
import { store } from '../../store'
import Field from '../field/Field'

const FieldsLayout = () => {
    return (
        <div className={styles.FieldsLayout}>
            {store.getState().fields.map((field, index) => {
                return <Field index={index} key={index} field={field} />
            })}
        </div>
    )
}

export default FieldsLayout
