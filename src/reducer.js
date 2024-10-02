export const initialState = {
	fields: Array(9).fill(''),
	currentPlayer: 'X',
	isEnded: false,
	isDraw: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_FIELDS':
			return {
				...state,
				fields: payload,
			};

		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SET_IS_ENDED':
			return {
				...state,
				isEnded: payload,
			};
		case 'SET_IS_DRAW':
			return {
				...state,
				isDraw: payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
