import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPalette, faPaperclip, faComputer, faComment} from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
    const scrollToSection = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start',     // Posiciona la sección al inicio de la ventana
            });
        }
    };


    return (
    
        <header className='b' >
            <button className='buttonI' onClick={() => scrollToSection('sobremi')}>
                <FontAwesomeIcon icon = {faStar} className='iconosH'></FontAwesomeIcon>
                <p className='sectionsP'>Sobre mi</p>
            </button>

            <button className='buttonI' onClick={() => scrollToSection('codigo')}>
                <FontAwesomeIcon icon = {faPaperclip} className='iconosH'></FontAwesomeIcon>
                <p className='sectionsP'>Código</p>
            </button>

            <button className='buttonI' onClick={() => scrollToSection('arte')}>
                <FontAwesomeIcon icon = {faPalette} className='iconosH'></FontAwesomeIcon>
                <p className='sectionsP'>Arte</p>
            </button>
            <button className='buttonI' onClick={() => scrollToSection('conocimientos')}>
                <FontAwesomeIcon icon = {faComputer} className='iconosH'></FontAwesomeIcon>
                <p className='sectionsP'>Conocimientos</p>
            </button>

            <button className='buttonI' onClick={() => scrollToSection('contacto')}>
                <FontAwesomeIcon icon = {faComment} className='iconosH'></FontAwesomeIcon>
                <p className='sectionsP'>Contacto</p>
            </button>
        </header>
    )
}