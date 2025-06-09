import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faPython, faJava, faJs, faFigma, faDocker, faAndroid, faGolang, faCss} from '@fortawesome/free-brands-svg-icons';
import visual from '../../assets/pictures/visual.png'
import ibis from '../../assets/pictures/ibis.png'
import inks from '../../assets/pictures/inks.png'
import krita from '../../assets/pictures/krita.png'
import postgres from '../../assets/pictures/Postgresql.png'
import R from '../../assets/pictures/R.png'
import story from '../../assets/pictures/story.png'
import vite from '../../assets/pictures/vit.png'
import s from '../../assets/pictures/s.png'
import luna from '../../assets/pictures/luna.png'
import t from '../../assets/pictures/t.png'
import mcr from '../../assets/pictures/my.png'
import mine from '../../assets/pictures/minecraft.png'
import './Softwares.css'

import pow from '../../assets/pictures/pow.png'

export const Sofwares = () => {
    return(
        <section className='softStyle' id='conocimientos'>
            
            <div className='contents'>
            <article className='left'>
                <img src= {luna} className='draws'></img>
                <img src= {pow} className='draws'></img>
                <img src= {s} className='draws'></img>

            </article>
            <div className='a'>
            <h2 className='title'>Mis conocimientos con herramientas digitales</h2>
            <section className='icons'>
                
            <span >
                <FontAwesomeIcon icon = {faGithub} className='iconos'></FontAwesomeIcon>
                <p>Github</p>
            </span>
            <span >
                <img src= {visual} className='iconosI'></img>
                <p>Visual</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faPython} className='iconos'></FontAwesomeIcon>
                <p>Python</p>
            </span>

             <span >
                <img src= {postgres} className='iconosI'></img>
                <p>PorgreSQL</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faJava} className='iconos'></FontAwesomeIcon>
                <p>Java</p>
            </span>

            <span >
                <img src= {R} className='iconosI'></img>
                <p>R</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faReact} className='iconos'></FontAwesomeIcon>
                <p>React</p>
            </span>

            <span >
                <img src= {vite} className='iconosI'></img>
                <p>IbisPaint</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faJs} className='iconos'></FontAwesomeIcon>
                <p>JavaScript</p>
            </span>

            <span >
                <img src= {story} className='iconosI'></img>
                <p>StoryBook</p>
            </span>
            <span >
                <FontAwesomeIcon icon = {faCss} className='iconos'></FontAwesomeIcon>
                <p>CSS</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faFigma} className='iconos'></FontAwesomeIcon>
                <p>Figma</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faDocker} className='iconos'></FontAwesomeIcon>
                <p>Docker</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faAndroid} className='iconos'></FontAwesomeIcon>
                <p>Kotlin</p>
            </span>

            <span >
                <FontAwesomeIcon icon = {faGolang} className='iconos'></FontAwesomeIcon>
                <p>Go</p>
            </span>

            <span >
                <img src= {ibis} className='iconosI'></img>
                <p>IbisPaint</p>
            </span>

            <span >
                <img src= {inks} className='iconosI'></img>
                <p>Inkscape</p>
            </span>

            <span >
                <img src= {krita} className='iconosI'></img>
                <p>Krita</p>
            </span>

            


           </section>
           </div>
           <article className='left'>
                <img src= {t} className='draws'></img>
                <img src= {mcr} className='draws'></img>
                <img src= {mine} className='draws'></img>

            </article>
            </div>

        </section>
    )
}