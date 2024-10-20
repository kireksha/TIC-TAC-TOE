import { Component } from 'react';
import FieldsLayout from '../fieldsLayout/FieldsLayout';
import InformationLayout from '../information/Information';
import { connect } from 'react-redux';

class GameContainer extends Component {
    constructor(props){
        super(props);
        this.restartGame = this.restartGame.bind(this);
    }

	restartGame() {
		this.props.dispatch({ type: 'RESTART_GAME' });
	}

	render() {
		return (
			<div className="text-center">
				<InformationLayout />
				<FieldsLayout />
				{(this.props.isEnded || this.props.isDraw) && (
					<button className="pointer mt-10 border-black border-2 border-solid p-1.5" onClick={this.restartGame}>
						Play Again
					</button>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    isEnded: state.isEnded,
    isDraw: state.isDraw,
});

const Game = connect(mapStateToProps)(GameContainer);

export default Game;
