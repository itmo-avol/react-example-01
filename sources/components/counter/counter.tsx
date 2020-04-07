import React, { FC, useState, useCallback } from 'react';
import Styles from './counter.module.css';

export type CounterProps = {
	initialValue: number;
};

export const Counter: FC<CounterProps> = ( { initialValue } ) =>
{
	const [value, setValue] = useState( initialValue );
	const handleIncrementClick = useCallback(
		() => setValue( value + 1 ),
		[setValue, value],
	);
	
	const counterClasses = [
		Styles.counter,
	];
	
	if ( value !== initialValue )
	{
		counterClasses.push( Styles.counter_changed );
	}
	
	return (
		<div className={counterClasses.join( ' ' )}>
			<output>{value}</output>
			<button
				type="button"
				className={Styles.incrementButton}
				onClick={handleIncrementClick}
			>
				Increment
			</button>
		</div>
	);
};
