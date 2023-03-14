import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Opa, sou o</p>
			<h1 className={styles.heading_1}>Maicon.</h1>
			<h1 className={styles.heading_2}>Sou Dev FullStack com Foco com Front-end.</h1>
			<p className={styles.desc}>
				Tenho experiencia com React Js, React Native e Next Js. Estudando Vue, Nuxt Js e Web3.0, amo aprender coisas novas, adoro resolver problemas, talvez por isso me tornei dev kkkkk.
			</p>
			<a href="#work">
				<button className={styles.btn}>Veja meus Projetos!</button>
			</a>
		</section>
	);
}

export default Home;
