import { connect /*, useDispatch, useSelector */ } from 'react-redux';
// import { selectFields, selectIsEnded, selectIsDraw, selectCurrentPlayer } from '../../select';
import styles from './Field.module.css'
import { Component } from 'react';

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

class FieldContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: props.fields,
            currentPlayer: props.currentPlayer,
            isEnded: props.isEnded,
            isDraw: props.isDraw
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        if (this.state.isEnded || this.state.isDraw || this.state.fields[this.props.index] !== '') {
            return
        }
        const newFields = this.state.fields.slice();
        newFields[this.props.index] = this.state.currentPlayer;
        this.props.dispatch({ type: 'SET_FIELDS', payload: newFields })
        this.props.dispatch({ type: 'SET_IS_ENDED', payload: checkWinner(this.state.fields, this.state.currentPlayer) })

        if (!checkWinner(this.state.fields, this.state.currentPlayer)) {
            this.props.dispatch({ type: 'SET_CURRENT_PLAYER', payload: this.state.currentPlayer === 'X' ? 'O' : 'X' })
            this.props.dispatch({ type: 'SET_IS_DRAW', payload: checkDraw(newFields) })
        };
    }

    render() {
        return (
            <div className={styles.Field} onClick={this.handleClick}>{this.props.field}</div>
        )
    }
}

const mapStateToProps = (state) => ({
    fields: state.fields,
    currentPlayer: state.currentPlayer,
    isEnded: state.isEnded,
    isDraw: state.isDraw
});

const Field = connect(mapStateToProps)(FieldContainer);

export default Field