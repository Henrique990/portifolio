import icon from '../header/assets/foto-henrique.png';
// import Curriculo from './assets/Enzo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Eu sou de Governador Valaderes. Atualmente estudando na <a href="https://www.rocketseat.com.br/">Rocketseat IGNITE</a>, e começei minha carreira em TI na Workana, 
                        empresa com a qual aindo trabalho, sou apaixonado por automação de sistemas e atuo como freelancer. 
                        {/* Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo. */}
                        </p>
                        {/* <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a> */}
                        {/* Retirei o botton porque tenho que alterar o pdf primeiro */}
                    </div>
                </div>
            </div>
        </section>
    );
}