import styles from './FieldsLayout.module.css';
import Field from '../field/Field';
import { useSelector } from 'react-redux';
import { selectField } from '../../selects';

const FieldsLayout = () => {
    const fields = useSelector(selectField);
    
    return (
        <div className={styles.FieldsLayout}>
            {fields.map((field, index) => {
                return <Field index={index} key={index} field={field} />
            })}
        </div>
    )
}

export default FieldsLayout
