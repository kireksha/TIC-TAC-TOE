import styles from './Field.module.css'
import { store } from "../../store";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];



const Field = ({ field, index, storeState }) => {

    const checkWinner = (fields = storeState.fields, currentPlayer = storeState.currentPlayer) => {
        return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === currentPlayer))
    }

    const handleClick = (index) => {
        if (storeState.isEnded || storeState.isDraw) {
            return
        }
        if (storeState.fields[index] !== '') {
            return
        }
        store.dispatch('SET_FIELDS')
        if (checkWinner(storeState.fields, storeState.currentPlayer)) {
            store.dispatch('SET_IS_WINNER', true)
            return
        }
        if (!storeState.fields.includes('')) {
            store.dispatch('SET_IS_DRAW', true)
            return
        }
        store.dispatch('SET_CURRENT_PLAYER')
    }

    return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

export default Field