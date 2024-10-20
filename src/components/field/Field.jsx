import { connect } from 'react-redux';
import { Component } from 'react';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const checkWinner = (field, player) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => field[index] === player),
	);
};

const checkDraw = (field) => {
	return !field.includes('');
};

class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (
			this.props.isEnded ||
			this.props.isDraw ||
			this.props.fields[this.props.index] !== ''
		) {
			return;
		}
		const newFields = this.props.fields.slice();
		newFields[this.props.index] = this.props.currentPlayer;
		this.props.dispatch({ type: 'SET_FIELDS', payload: newFields });
		this.props.dispatch({
			type: 'SET_IS_ENDED',
			payload: checkWinner(newFields, this.props.currentPlayer),
		});
		if (!checkWinner(newFields, this.props.currentPlayer)) {
			this.props.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: this.props.currentPlayer === 'X' ? 'O' : 'X',
			});
			this.props.dispatch({ type: 'SET_IS_DRAW', payload: checkDraw(newFields) });
		}
	}

	render() {
		return (
			<div className="text-center border-black border-2 border-solid text-8xl Field" onClick={this.handleClick}>
				{this.props.field}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	fields: state.fields,
	currentPlayer: state.currentPlayer,
	isEnded: state.isEnded,
	isDraw: state.isDraw,
});

const Field = connect(mapStateToProps)(FieldContainer);

export default Field;
