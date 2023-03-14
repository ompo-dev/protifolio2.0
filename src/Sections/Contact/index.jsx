import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="04" heading="Qual o próximo?" />
			</div>
			<h1 className={styles.heading_2}>Entre em contato</h1>
			<p className={styles.desc}>
				Vamos conversar, me mande suas ideias e projetos por email clicando no link a baixo, vamos fazer acontecer.
			</p>
			<a href="mailto:2326mpb@gmail.com?subject=Envie sua proposta, em breve lhe enviarei o orçamento">
				<button className={styles.btn}>Enviar Projeto</button>
			</a>
		</section>
	);
}

export default Contact;
