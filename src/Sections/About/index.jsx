import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="Sobre mim" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					Eu sou animado e gosto de aprender coisas novas. Comecei a programar aos 12 anos, começando com Python, depois C#, C++, JavaScript e TypeScript. 
Realizei cursos de programação com arduino, HTML, CSS, JS e robótica. Destaquei-me como instrutor de robótica aos 14 anos.
Concluí meu Técnico de Informática em 2022.
Minhas áreas de atuação são React JS, Next JS e React Native.
Estudo em andamento sobre Vue JS e Web3.0.
					</p>
					<p className={styles.desc}>
					Amor pela programação desde criança, quando descobri que poderia montar e desmontar coisas bem mais interessantes que meus brinquedos.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
