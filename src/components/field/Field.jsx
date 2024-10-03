import styles from './Field.module.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectField, selectIsDraw } from '../../selects';

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];



const Field = ({ field, index }) => {
    const dispatch = useDispatch();
    const currentPlayer = useSelector(selectCurrentPlayer);
    const fields = useSelector(selectField);
    const isDraw = useSelector(selectIsDraw);
    const isEnded = useSelector(selectIsDraw);

    const setCurrentPlayer = () => {
        return currentPlayer === 'X' ? 'O' : 'X'
    }
    
    const checkWinner = (fields, player) => {
        console.log("FIELDS: ", fields)
        return WIN_PATTERNS.some((pattern) => pattern.every((index) => fields[index] === player))
    }
    
    const checkDraw = (fields) => {
        return !fields.includes('');
    };
    
    const setFieldsFn = (i) => {
        const newFields = fields.slice();
        newFields[i] = currentPlayer;
        return newFields
    };

    const handleClick = (index) => {
        if (isEnded || isDraw || fields[index] !== '') {
            return
        }
        dispatch({ type: 'SET_FIELDS', payload: setFieldsFn(index) });
        dispatch({ type: 'SET_IS_ENDED', payload: checkWinner(fields, currentPlayer) });
        if (!isEnded) {
            dispatch({ type: 'SET_IS_DRAW', payload: checkDraw(fields) });
            dispatch({ type: 'SET_CURRENT_PLAYER', payload: setCurrentPlayer() });
        };
    }

    return <div className={styles.Field} onClick={() => handleClick(index)}>{field}</div>
}

export default Field