import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';
import './Contact.css'


export const Contact = () => {
    return(
        <section id = 'contacto' className="contactStyle">
            <h2 className='title'>Contactame</h2>

            <div className='redes'>

            <a className='link' href = {'mailto:melisadmendizabal@gmail.com'}>
            <span >
                <FontAwesomeIcon icon = {faEnvelope} className='iconos'></FontAwesomeIcon>
                <p>Correo</p>
            </span>
            </a>


            <span >
                <FontAwesomeIcon icon = {faDiscord} className='iconos'></FontAwesomeIcon>
                <p>_melmel__</p>
            </span>
          
            <a className='link' href = {'https://github.com/melisadmendizabal'}>
            <span >
                <FontAwesomeIcon icon = {faGithub} className='iconos'></FontAwesomeIcon>
                <p>Github</p>
            </span>
            </a>

            </div>
        </section>
    )
}