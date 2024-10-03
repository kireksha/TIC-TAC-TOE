import { useSelector } from "react-redux";
import { selectIsDraw, selectIsEnded, selectCurrentPlayer } from "../../selects";

const InformationLayout = () => {
    const isEnded = useSelector(selectIsEnded);
    const isDraw = useSelector(selectIsDraw);
    const currentPlayer = useSelector(selectCurrentPlayer);

    return (
        <>
            {
                (!isEnded && !isDraw) &&
                <h1>Turn {currentPlayer}</h1>
            }
            {
                isEnded &&
                <h1>Winner {currentPlayer}</h1>
            }
            {
                isDraw &&
                <h1>Draw</h1>
            }
        </>
    )
}

export default InformationLayout

