import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faReact, faPython, faJava, faJs, faFigma, faDocker, faAndroid, faGolang} from '@fortawesome/free-brands-svg-icons';
import './Softwares.css'


export const Sofwares = () => {
    return(
        <section className='softStyle' id='conocimientos'>
            <section className='icons'>
            <span >
                <FontAwesomeIcon icon = {faGithub} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faReact} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faPython} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faJava} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faJs} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faFigma} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faDocker} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faAndroid} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faGolang} className='iconos'></FontAwesomeIcon>
                <p>a</p>
            </span>


           </section>

        </section>
    )
}