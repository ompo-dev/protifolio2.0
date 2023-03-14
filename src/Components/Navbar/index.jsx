import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Maicon - ompo</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>Sobre
				</a>
				<a href="#experience" className={styles.nav_link}>
					<span>02.</span>Experiência
				</a>
				<a href="#work" className={styles.nav_link}>
					<span>03.</span>Trabalhos
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>04.</span>Contato
				</a>
				<a href="https://github.com/ompo-dev">
				<button className={styles.nav_resume_btn}>GitHub</button>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
