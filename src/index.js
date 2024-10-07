import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './reset.css';
import './index.css';
import Game from './components/game/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</StrictMode>,
);
