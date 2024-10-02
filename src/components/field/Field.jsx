import styles from './Field.module.css'
import { store } from "../../store";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const setCurrentPlayer = () => {
    return store.getState().currentPlayer === 'X' ? 'O' : 'X'
}

const checkWinner = (fields, player) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === player))
}

const checkDraw = (fields) => {
    return !fields.includes('');
};

const setFieldsFn = (i) => {
    const newFields = store.getState().fields.slice();
    newFields[i] = store.getState().currentPlayer;
    return newFields
};

const Field = ({ field, index }) => {

    const handleClick = (index) => {
        if (store.getState().isEnded || store.getState().isDraw || store.getState().fields[index] !== '') {
            return
        }
        store.dispatch({ type: 'SET_FIELDS', payload: setFieldsFn(index) });
        store.dispatch({ type: 'SET_IS_ENDED', payload: checkWinner(store.getState().fields, store.getState().currentPlayer) });
        if (!store.getState().isEnded) {
            store.dispatch({ type: 'SET_IS_DRAW', payload: checkDraw(store.getState().fields) });
            store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: setCurrentPlayer() });
        };
    }

    return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

export default Field