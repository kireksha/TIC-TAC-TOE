import styles from './FieldsLayout.module.css'
import Field from '../field/Field'
import React from 'react'
import PropTypes from 'prop-types'

const FieldsLayout = ({ fields, handleClick }) => {
    return (
        <div className={styles.FieldsLayout}>
            {fields.map((field, index) => {
                return <Field index={index} key={index} field={field} handleClick={handleClick} />
            })}
        </div>
    )
}

FieldsLayout.propTypes = {
    fields: PropTypes.array,
    handleClick: PropTypes.func,
}

export default FieldsLayout
