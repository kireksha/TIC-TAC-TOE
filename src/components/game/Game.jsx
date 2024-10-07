import FieldsLayout from "../fieldsLayout/FieldsLayout";
import InformatonLayout from "../information/Information";
import styles from "./Game.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDraw, selectIsEnded } from "../../select";

const Game = () => {
    const isEnded = useSelector(selectIsDraw);
    const isDraw = useSelector(selectIsEnded);
    const dispatch = useDispatch();

    const restartGame = () => {
        dispatch({ type: 'RESTART_GAME' });
    };

    return (
        <div className={styles.GameContainer}>
            <InformatonLayout />
            <FieldsLayout />
            {(isEnded || isDraw) &&
                <button className={styles.ButtonStartAgain} onClick={restartGame}>Play Again</button>
            }
        </div>
    )
}

export default Game