import styles from './FieldsLayout.module.css'
import Field from '../field/Field'
import { useSelector } from 'react-redux'
import { selectFields } from '../../select/selectFields'

const FieldsLayout = () => {
    const fields = useSelector(selectFields);

    return (
        <div className={styles.FieldsLayout}>
            {fields.map((field, index) => {
                return <Field index={index} key={index} field={field} />
            })}
        </div>
    )
}

export default FieldsLayout
