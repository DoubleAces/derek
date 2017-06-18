import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

render(
	<Router children={routes} />, document.getElementById('app')
);