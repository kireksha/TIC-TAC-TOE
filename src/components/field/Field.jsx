import React from "react";
import styles from './Field.module.css'
import PropTypes from 'prop-types'

const Field = ({ field, index, handleClick }) => {
    return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

Field.propTypes = {
    field: PropTypes.array,
    index: PropTypes.number,
    handleClick: PropTypes.func,
}

export default Field