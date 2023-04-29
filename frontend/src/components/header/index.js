import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';

const NAME = "John";

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/boxes.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Code Tierlist</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/new-project">
				+ New Project
			</Link>
			<Link activeClassName={style.active} href={`/profile/${NAME.toLowerCase()}`}>
				<InitialsAvatar name={NAME} />
			</Link>
		</nav>
	</header>
);

export default Header;
