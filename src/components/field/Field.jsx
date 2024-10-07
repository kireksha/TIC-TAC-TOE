import { useDispatch, useSelector } from 'react-redux';
import { selectFields, selectIsEnded, selectIsDraw, selectCurrentPlayer } from '../../select';
import styles from './Field.module.css'

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const setCurrentPlayer = (player) => {
    return player === 'X' ? 'O' : 'X'
}

const checkWinner = (field, player) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((index) => field[index] === player))
}

const checkDraw = (field) => {
    return !field.includes('');
};

const Field = ({ field, index }) => {
    const dispatch = useDispatch();

    const currentPlayer = useSelector(selectCurrentPlayer);
    const isDraw = useSelector(selectIsDraw);
    const isEnded = useSelector(selectIsEnded);
    const fields = useSelector(selectFields);

    const handleClick = (index) => {
        if (isEnded || isDraw || fields[index] !== '') {
            return
        }
        const newFields = fields.slice();
        newFields[index] = currentPlayer;
        dispatch({ type: 'SET_FIELDS', payload: newFields });
        dispatch({ type: 'SET_IS_ENDED', payload: checkWinner(newFields, currentPlayer) });
        if (!checkWinner(newFields, currentPlayer)) {
            dispatch({ type: 'SET_IS_DRAW', payload: checkDraw(newFields) });
            dispatch({ type: 'SET_CURRENT_PLAYER', payload: setCurrentPlayer(currentPlayer) });
        };
    }

    return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

export default Field