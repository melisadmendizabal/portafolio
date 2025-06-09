import backk from '../../assets/pictures/JellyBack.png'
import pet from '../../assets/pictures/lazyPet.png'
import cat from '../../assets/pictures/Cats.png'
import comic from '../../assets/pictures/comic.png'
import veg from '../../assets/pictures/veg.png'
import l from '../../assets/pictures/l.png'
import t from '../../assets/pictures/t.png'
import s from '../../assets/pictures/s.png'
import sims from '../../assets/pictures/sims.png'
import gato from '../../assets/pictures/gato.png'
import './Art.css'


export const Art = () => {
    return(
        <section id = 'arte' className="artStyle">
            <h2 className='title'>Un poco de mi arte</h2>

            <div className='contents'>

             <article className='left'>
                <img src= {sims} className='draws'></img>
                <img src= {gato} className='draws'></img>
                <img src= {l} className='draws'></img>

            </article>
            

            <section className='artIma'>

            <a className='link' href = {'https://github.com/melisadmendizabal/ProyectoPlataformasMoviles/blob/main/app/src/main/res/drawable/bee_pet.png'} target='_blank'>
            <article className='imagenesv'>
                <img src= {backk} className='draws'></img>
                <h3 className='hA'>Fondo con transparencia</h3>
                <p className='pA'>Para un proyecto de una app de salud mental, realicé ilustraciones con fondos transparentes para adaptarse al modo de color del sistema.</p>
            </article>
            </a>

            <a className='link' href = {'https://github.com/melisadmendizabal/ProyectoPlataformasMoviles/blob/main/app/src/main/res/drawable/bee_pet.png'} target='_blank'>
            <article className='imagenes'>
                <img src= {pet} className='draws'></img>
                <h3 className='hA'>Mascota de aplicación</h3>
                <p className='pA'>También diseñé personajes basados en descripciones de un compañero, usando paletas brillantes que combinan con el fondo adaptativo.</p>
            </article>
            </a>

            <a className='link' href = {'https://github.com/Branuvg/Cat_souls/blob/main/Cat%20souls/images/cocina.png'} target='_blank'>
            <article className='imagenes'>
                <img src= {cat} className='draws'></img>
                <h3 className='hA'>Cat Soulds</h3>
                <p className='pA'>En mis primeras clases de programación, diseñé los personajes, fondos y portada en pixel art para un videojuego simple.</p>
            </article>
            </a>

            <a className='link' href = {'https://www.canva.com/design/DAGc8Dzb8Pc/7WyHplYbG3s7jQB0h7DgtQ/edit?utm_content=DAGc8Dzb8Pc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'} target='_blank'>
            <article className='imagenesv'>
                <img src= {comic} className='draws'></img>
                <h3 className='hA'>Invierno, otra vez</h3>
                <p className='pA'>Este cómic lo creamos entre un amigo y yo: él escribió la historia y los diálogos, y yo ilustré todo a mano para luego escanearlo.</p>
            </article>
            </a>

            </section>

             <article className='left'>
                <img src= {t} className='draws'></img>
                <img src= {veg} className='draws'></img>
                <img src= {s} className='draws'></img>

            </article>
            </div>


           
        </section>
    )
}