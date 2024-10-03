import FieldsLayout from "../fieldsLayout/FieldsLayout";
import InformatonLayout from "../information/Information";
import styles from "./Game.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDraw, selectIsEnded } from "../../selects";

const Game = () => {
    const dispatch = useDispatch();
    const isEnded = useSelector(selectIsEnded);
    const isDraw = useSelector(selectIsDraw);
    return (
        <div className={styles.GameContainer}>
            <InformatonLayout />
            <FieldsLayout />
            {(isEnded || isDraw) &&
                <button className={styles.ButtonStartAgain} onClick={() => dispatch({ type: 'RESTART_GAME' })}>Play Again</button>
            }
        </div>
    )
}

export default Game