import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Base from './Base';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Base />
		<App />
	</React.StrictMode>,
);
