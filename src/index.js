import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import Game from './components/game/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Game />
	</StrictMode>,
);
