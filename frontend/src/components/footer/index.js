import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { InitialsAvatar } from '../InitialsAvatar/InitialsAvatar';
import { userContext } from "../../contexts/userContext";
import { useContext } from 'preact/hooks';

const NAME = "John";

const Footer = () => {
	const userInfo = useContext(userContext);

	return (
	<footer class={style.footer}>
		<div class={style.footerContent}>
			<a href="mailto:contact@codetierlist.tech">Contact us</a>
		</div>
	</footer>
)};

export default Footer;
