import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/root/root';
import './index.css';

render( <Root />, document.getElementById( 'root' ) );

if ( process.env.NODE_ENV === 'development' )
{
	console.log( 'Hello, DEV' );
}
