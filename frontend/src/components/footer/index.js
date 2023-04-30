import style from './style.css';

const Footer = () => {
	return (
	<footer class={style.footer}>
		<div class={style.footerContent}>
			<a href="mailto:contact@codetierlist.tech">Contact us</a> | Made with <span class={style.heart}>💖</span> by <a href="https://gdscutm.com">shrupert</a>
		</div>
	</footer>
)};

export default Footer;
