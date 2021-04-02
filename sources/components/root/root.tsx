import React, { FC } from 'react';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';

export type RootProps = {
	[key: string]: never;
};

const lineImage = new URL( './images/line.svg', import.meta.url ).href;

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
