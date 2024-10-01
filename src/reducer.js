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
			return (index) => {
				const newFields = initialState.fields.slice();
				newFields[index] = initialState.currentPlayer;
				return {
					...initialState,
					fields: newFields,
				};
			};

		case 'SET_CURRENT_PLAYER':
			return (prev) =>
				prev === 'X'
					? { ...initialState, currentPlayer: 'O' }
					: { ...initialState, currentPlayer: 'X' };
		case 'SET_IS_ENDED':
			return {
				...initialState,
				isEnded: payload,
			};
		case 'SET_IS_DRAW':
			return {
				...initialState,
				isDraw: payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
