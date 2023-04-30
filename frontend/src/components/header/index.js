import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';
import { userContext } from "../../contexts/userContext";
import { useContext } from 'preact/hooks';
import { Logout } from "@mui/icons-material";

const NAME = "John";

const Header = () => {
	const userInfo = useContext(userContext);

	return (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/boxes.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Code Tierlist</h1>
		</a>
		<nav>
			{ userInfo["role"] === "professor" &&
				<Link activeClassName={style.active} href="/new-project">
					+ New Project
				</Link>
			}
			<Link
				activeClassName={style.active}
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				title="Logout"
			>
				<Logout fontSize="small" />
			</Link>
			<Link activeClassName={style.active} href={`/profile/${NAME.replaceAll(" ", "-").toLowerCase()}`}>
				<InitialsAvatar name={NAME} />
			</Link>
		</nav>
	</header>
)};

export default Header;
