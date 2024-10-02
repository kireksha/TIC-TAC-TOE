import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;
	let listeners = [];
	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((fn) => fn());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
		},
	};
};

export const store = createStore(appReducer);

store.dispatch({});
