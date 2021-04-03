import type { FC } from 'react';
import Styles from './header.module.css';

export type HeaderProps = {
	title: string;
};

export const Header: FC<HeaderProps> = ( { title } ) => (
	<header>
		<h1 className={Styles.heading}>{title}</h1>
	</header>
);
