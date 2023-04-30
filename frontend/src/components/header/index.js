import { Link } from 'preact-router/match';
import style from './style.css';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';
import { userContext } from "../../contexts/userContext";
import { useContext } from 'preact/hooks';
import { Logout } from "@mui/icons-material";

const Header = ({ logout }) => {
	const [userInfo] = useContext(userContext);
	return (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/boxes.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Code Tierlist</h1>
		</a>
		<nav>
			{ userInfo &&
				<>
					{
						userInfo['role'] === 'instructor' &&
						<Link activeClassName={style.active} href="/new-project">
							+ New Project
						</Link>
					}
					<div
						className={style.active}
						onClick={logout}
						title="Logout"
						style={{ flexBasis: '24px'}}
					>
						<Logout fontSize="small" />
					</div>
					<Link activeClassName={style.active} href="profile">
						<InitialsAvatar name='guest' />
					</Link>
				</>
			}
		</nav>
	</header>
)};

export default Header;
