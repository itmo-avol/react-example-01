import React, { FC } from 'react';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import lineImage from './images/line.svg';

export type RootProps = {
	[key: string]: never;
};

export const Root: FC<RootProps> = () =>
{
	const title = 'Hello, world!';
	
	return (
		<>
			<Header title={title} />
			<p>
				Hello!
				<img src={lineImage} alt="" />
			</p>
			{<Counter initialValue={1} />}
		</>
	)
};
